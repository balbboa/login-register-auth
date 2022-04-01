import React, { Component } from 'react';
import '../styles/index.css'; 
import axios from 'axios';
import AdminLTE, { Button, Box } from 'adminlte-2-react';


const api = axios.create({
  baseURL: 'http://localhost:8000/api'
})

class Agentes extends Component {

    state = {
      repo: []
    }

    constructor(){
      super();
      this.getRepo();
    }

    getRepo = async () => {
      try {
        let data = await api.get('/agentes').then(({ data }) => data);
          this.setState({ repo: data})
        }
      catch (err) {
        console.log(err)
      }
    }

    createRepo = async () => {
      let res = await api.post('/agentes', { nome: 'tereza', id: 103,
                          matricula: '222222' })
                          .catch(err=> console.log(err))
      this.getRepo();
    }

    deleteRepo = async (id) => {
      let data = await api.delete(`agentes/${id}`)
                          .catch(err=> console.log(err))
      this.getRepo();
    }
    
    updateRepo = async (id, val) => {
      let data = await api.patch(`agentes/${id}`, { nome: val})
                          .catch(err=> console.log(err))
      this.getRepo();
    }

    render() {
      return (

        <>
        <Button onClick={this.createRepo} text={"criar"}/>
        
        
          {this.state.repo.map(repo => 

              <Box className="d-flex">
                <strong key={repo.id}>{repo.nome}</strong>
                <p>{repo.matricula}</p>
                <Button onClick={()=>this.deleteRepo(repo.id)} text={"deletar"}/>
                <Button onClick={()=>this.updateRepo(repo.id, `${repo.nome}aaa`)} text={"editar"}/>
              </Box>

          )}
        </>
        )
    }
  }

export default Agentes;