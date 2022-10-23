import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const navigate = useNavigate();

    const Api_url = 'http://127.0.0.1:8000/api/';

    const [title, settitle]= useState('');
    const [description, setdescription]= useState('');
    const [error, seterror]= useState('');
    const [errortext, seterrortext]= useState('');
    const [loading, setloading]= useState(false);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(title === '' || description === ''){
            seterror(true)
            seterrortext('Fill all fields')
        }else{
            seterror(false)
            setloading(true)
            let query= await axios.post(Api_url+'post', {
                title,
                description
            })
            navigate('/blog');
        }
    }


    return <div className="card p-4">
                {error ? <div className="error_field">
                <span className="error_text">{errortext}</span>
            </div>:null}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=> settitle(e.target.value)}
                    placeholder='Post title..' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="8" value={description} onChange={(e)=> setdescription(e.target.value)}
                    placeholder='Post description..' ></textarea>
                </div>
                <button className="btn btn-success" disabled={loading?true:null}>Save Post</button>
            </form>
        </div>
}

export default Form;