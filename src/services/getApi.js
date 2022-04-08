import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/agentes`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, nome, matricula) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('nome', nome)
        localStorage.setItem('matricula', matricula)
    }
 
    const getData = () => {
        axios.get(`http://localhost:8000/api/agentes`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8000/api/agentes/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Matricula</th>
                    <th scope="col">x</th>
                    <th scope="col">x</th>
                    </tr>
                </thead>

                <tbody>
                    {apiData.map((data) => {
                        return (
                            <tr>
                                <td>{data.nome}</td>
                                <td>{data.matricula}</td>
                                <td>
                                    <Link to='/update'>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => setData(data.id, data.firstName, data.lastName)}>
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}