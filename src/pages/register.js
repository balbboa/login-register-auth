import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'

axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function Register() {
    const navigate = useNavigate();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
        console.log("botao");
    
        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/register`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate('/');
                }
                else{
                    setRegister({...registerInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

        
    

  return (
    <div>
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4 className='text-center'>Registrar</h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={registerSubmit}>
                                <div className='form-group mb-3'>
                                    <label>Nome</label>
                                    <input type='' name='name' onChange={handleInput} value={registerInput.name} className='form-control'  />
                                    <span>{registerInput.error_list.name}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='' name='email' onChange={handleInput} value={registerInput.email} className='form-control' />
                                    <span>{registerInput.error_list.email}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Senha</label>
                                    <input type='' name='password' onChange={handleInput} value={registerInput.password} className='form-control' />
                                    <span>{registerInput.error_list.password}</span>
                                </div>
        
                                <div className='form-group mb-3 d-flex justify-content-center'>
                                    <button type='submit' className='btn btn-success'>Registrar</button>
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
