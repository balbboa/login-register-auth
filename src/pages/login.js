import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

export default function Login() {
    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });
    
    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate('/dashboard');
                }
                else if(res.data.status === 401){
                    swal("Warning", res.data.message, "warning");
                }
                else{
                    setLogin({...loginInput, error_list: res.data.validation_errors});
                }
            });
        });
    }
  
    return (
    <div>
       <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4 className='text-center'>Logar</h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={loginSubmit}>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='email' name='email' onChange={handleInput} value={loginInput.email} className='form-control' />
                                    <span>{loginInput.error_list.email}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Senha</label>
                                    <input type='password' name='password' onChange={handleInput} value={loginInput.password} className='form-control'/>
                                    <span>{loginInput.error_list.password}</span>
                                </div>
                                <div className='form-group mb-3 d-flex justify-content-center'>
                                        <button type='submit' className='btn btn-primary'>Entrar</button>
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
