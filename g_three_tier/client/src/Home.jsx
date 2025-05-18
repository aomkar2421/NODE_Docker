import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

const Home = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchUsers = () => {
        axios.get("http://localhost:4500/")
            .then((res) => setData(res.data))
            .catch((err) => console.log("Error fetching users"));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:4500/delete/" + id)
            .then(res => {
                toast("Deleted successfully");
                fetchUsers();
            })
            .catch((err) => toast("Error occurred " + err));
    };

    const handleUpdate = (id) => {
        navigate("/update/"+id)
    }

    return (
        <div className='container-fluid bg-dark min-vh-100'>
            <div className='container'>
                <div className='col-md-8 offset-md-2 pt-5'>
                    <p className='text-white text-center fs-3 card-header fw-bold my-4'>User Management</p>
                    <Link to={'/add'}><button className='btn btn-secondary mb-2 px-2'>ADD +</button></Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((user, i) => (
                                    <tr key={i}>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td><button onClick={e => handleDelete(user.id)} className='btn btn-danger'>Delete</button></td>
                                        <td><button onClick={e => handleUpdate(user.id)} className='btn btn-primary'>Update</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home