import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const AddUser = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setData({ ...data, [e.target.name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user data ", data);
        axios.post("http://localhost:4500/create", data)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log("error occured");
                toast("Something went wrong "+ err);
            })
        setData({
            name: "",
            email: "",
            phone: ""
        });
    }

    return (
        <div className='container-fluid min-vh-100 bg-dark w-100'>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='card'>
                            <div className='card-header p-4 text-center fs-3 fw-bold my-2
                            '>Add User</div>
                            <div className='card-body'>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" onChange={(e) => handleChange(e)} value={data.email} className="form-control" name='email' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" onChange={(e) => handleChange(e)} value={data.name} className="form-control" name='name' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="text" onChange={(e) => handleChange(e)} value={data.phone} className="form-control" name='phone' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" value="Submit" className='btn btn-primary' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser