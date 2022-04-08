import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Update() {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`http://localhost:8000/api/agentes/${ID}`, {
            nome,
            matricula
        })
    }

    useEffect(() => {
        setNome(localStorage.getItem('nome'));
        setMatricula(localStorage.getItem('matricula'));
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Nome</label>
                    <input name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder='Nome' />
                </div>
                <div className="form-group">
                    <label>Matricula</label>
                    <input
                        name="matricula"
                        value={matricula}
                        placeholder='Matricula'
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                </div>
                <button text={'Editar'} onClick={sendDataToAPI}>Editar</button>
            </form>
        </div>
    )
}