import React from "react";
import Form from '../Components/form';


const CreatePost = ()=> {
    return <>

    <div className="container py-4">
        <div className="row p-4 bg-secondary">
            <div className="col-md-8">
                <h1>Create a Blog Post</h1>
            </div>
        </div>

        <div className="row p-4">
            <div className="col-md-6">
                <Form />
            </div>
        </div>
    </div>

    </>
}

export default CreatePost;