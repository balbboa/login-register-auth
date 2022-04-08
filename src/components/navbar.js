import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

export default function Navbar
() {

    const navigate = useNavigate();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('api/logout').then(res => {
        if(res.data.status === 200){
            localStorage.removeItem('auth_token', res.data.token);
            localStorage.removeItem('auth_name', res.data.username);
            swal("Success", res.data.message, "success");
            navigate('/');
        }
        })

    }

  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">            
            <a className="navbar-brand" href="#"></a>
            <div className="d-flex navbar-brand flex-row-reverse">
                <button type="button" className="btn btn-danger" onClick={logoutSubmit}>
                    <i className="bi bi-box-arrow-right"></i>       
                </button>
                <button type="button" className="btn btn-success mx-2">
                    <i className="bi bi-chat-dots-fill"></i>      
                </button>
                <button type="button" className="btn btn-primary">
                    <i className="bi bi-arrows-angle-expand"></i>      
                </button>
            </div>
        </div>
        </nav>
  )
}
