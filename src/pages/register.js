import axios from 'axios';
import React, { useState } from 'react'

export default function Register() {

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.presist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/register`, data).then(res => {
                if(res.data.status === 200){

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
                                    <input type='' name='nome' onChange={handleInput} value={registerInput.name} className='form-control'  />
                                    <span>{registerInput.error_list.name}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='' name='email' onChange={handleInput} value={registerInput.email} className='form-control' />
                                    <span>{registerInput.error_list.email}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Senha</label>
                                    <input type='' name='senha' onChange={handleInput} value={registerInput.password} className='form-control' />
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
