import React from "react";
import { NavLink } from 'react-router-dom';
import List from '../Components/list';


const Blog = ()=> {
    return <>

    <div className="container py-4">
        <div className="row p-4 bg-secondary">
            <div className="col-md-8">
                <h3>This is the Blog Page</h3>
            </div>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-end">
                <NavLink className="btn btn-info btn-md px-4 me-sm-3" to="/create">Create Post</NavLink>
            </div>
        </div>

        <div className="row p-4">
            <div className="col-md-8">
                <List />
            </div>
        </div>
    </div>

    </>
}

export default Blog;