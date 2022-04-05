import React, {Component} from 'react';
import axios from 'axios';
import AdminLTE, { Button } from 'adminlte-2-react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
const api = axios.create({
    baseURL: 'http://localhost:8000/api'
  })

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeMatricula = this.onChangeMatricula.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: '',
            matricula: '',
        }
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }

    onChangeMatricula(e) {
        this.setState({
            matricula: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            nome: this.state.nome,
            matricula: this.state.matricula,
        };

        axios.post('http://localhost:8000/api/agentes', obj)
            .then(res =>  
                NotificationManager.success("Agente adicionado", 'Sucesso'));

        this.setState({
            nome: "",
            matricula: "",
        })

        this.getRepo();
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Adicionar agente:</h3>
                <form>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                               value={this.state.nome}
                               onChange={this.onChangeNome}
                        />
                    </div>
                    <div className="form-group">
                        <label>Matricula: </label>
                        <input type="text" className="form-control" value={this.state.matricula}
                               onChange={this.onChangeMatricula}/>
                    </div>
                    <div className="form-group">
                        <Button text={"criar"} onClick={this.onSubmit} className="btn btn-primary btn-sm"/>
                    </div>
                </form>
                <NotificationContainer/>
            </div> 
        )
    }
}