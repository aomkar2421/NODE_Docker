import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'

const EditUser = () => {

    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const apiUrl = import.meta.env.VITE_API_URL;

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setData({ ...data, [e.target.name]: value });
    }

    useEffect(() => {
        axios.get( `${apiUrl}/`+id)
            .then((res) => {
                if (res.data.length > 0) {
                    setData(res.data[0]); // Use the first item
                }
            })
            .catch((err) => {
                toast("error occurred " + err);
            });
    }, []);


    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("user data ", data);
        axios.put(`${apiUrl}/update/` + id, data)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log("error occured");
                toast("Something went wrong " + err);
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
                            '>Edit User</div>
                            <div className='card-body'>
                                <form action="" onSubmit={handleUpdate}>
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
                                        <input type="submit" value="Update" className='btn btn-primary col-md-12' />
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

export default EditUser