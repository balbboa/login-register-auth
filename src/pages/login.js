import React from 'react'

export default function Login() {
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
                            <form>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='' name='email' className='form-control' value='' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Senha</label>
                                    <input type='' name='senha' className='form-control' value='' />
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
