import axios from 'axios';
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


const List = () => {

    const [posts, setposts] = useState([])

    const fetchPost = async ()=> {

        const Api_url = 'http://127.0.0.1:8000/api/';

        await axios.get(Api_url+'post')
        .then(res=> setposts(res.data))
        .catch((e)=> {
            console.log(e)
        })
    }

    useEffect(() => {
        return () => {
            fetchPost();
        };
    }, [])

    return  <div className="container mt-1">
                <div className="col-md-8">
                    {posts.map((post) =>
                    <div key={post.id}>
                        <div className="card p-3">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mt-2">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <NavLink to={`/posts/${post.id}`}>
                                            <h5 className="mb-1 text-primary">{post.title}</h5>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> ) }
                </div>
            </div>

}



export default List;