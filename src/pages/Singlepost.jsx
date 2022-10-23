import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'



const Single = ()=> {

    let params = useParams()

    const [post, setpost]= useState({})//The api will return an object, not an array

    //get the current post details
    const getPost = async(id)=>{
        await axios.get(`${process.env.REACT_APP_API_URL}post/${id}`)
        .then((res)=>setpost(res.data))
        .catch(e=>console.error(e))
    }


    useEffect(() => {
        return () => {
            getPost(params.id)

        };
    }, [params.id])

    return  <div className="main p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="mb-1 text-primary">{post.title}</h4>
                                </div>
                                <div className="card-body">
                                    <p className="mb-1 text-primary">{post.description}</p>
                                </div>
                            </div>
                            <Link to={`/`} className="btn btn-success float-end">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>

}

export default Single;
