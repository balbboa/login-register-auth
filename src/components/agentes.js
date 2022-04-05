import React, { Component, useState } from 'react';
import '../styles/index.css'; 
import axios from 'axios';
import AdminLTE, { Button, Box, Content } from 'adminlte-2-react';
import Create from '../services/api';
import Update from '../services/updateApi';
import { Link } from 'react-router-dom';


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
      let res = await api.post('/agentes', { nome:'asdasd', matricula:'asdasdddd'})
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
        <Content>
        <Create/>
        
          {this.state.repo.map(repo => 
          
              <Box className="d-flex flex-row align-itens-center">
                <strong key={repo.id}>{repo.nome}</strong>
                <p>{repo.matricula}</p>
                <Button onClick={()=>this.deleteRepo(repo.id)} text={"deletar"}/>
                <Link to='agentes/update'>
                  <Button onClick={Update} text={"editar"}/>
                </Link>
              </Box>

          )}
          </Content>
        </>
        )
    }
  }

export default Agentes;