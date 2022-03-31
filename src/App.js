import React, { Component } from 'react';
import AdminLTE, { Sidebar } from 'adminlte-2-react';
import HelloWorld from './components/helloworld'
import Agentes from './components/agentes'


const { Item } = Sidebar;



class App extends Component {

  sidebar = [
    <>
    <Item active text="Cadastro auxiliares">
      <Item text="Hello world" to="/hello-world" />
      <Item icon='fa-user' text="Agentes" to="/agentes" />
      <Item icon='fa-map-marker-alt' text="Locais" to="/locais" />
      <Item icon='fa-list' text="Modalidades de policiamento" to="/modalidades-policiamento" />
      <Item icon='fa-list' text="Modelos de veículos" to="/modelos-de-veiculos" />
      <Item icon='fa-list' text="Processos de policiamento" to="/processos-policiamento" />
      <Item icon='fa-list' text="Operações" to="/operacoes" />
      <Item icon='fa-university' text="Órgãos" to="/orgaos" />
      <Item icon='fa-list' text="Tipos de escala" to="/tipos-escala" />
      <Item icon='fa-list' text="Tipos de função" to="/tipos-funcao" />
      <Item icon='fa-list' text="Tipos de serviço" to="/tipos-servico" />
      <Item icon='fa-list' text="Regimes de trabalho" to="/regimes-trabalho" />
      <Item icon='fa-list' text="Títulos" to="/titulos" />
      <Item icon='fa-university' text="Unidades" to="/unidades" />
      <Item icon='fa-university' text="Unidades pagadoras" to="/unidades-pagadoras" />
      <Item icon='fa-car' text="Veículos" to="/veiculos" />
      <Item icon='fa-list' text="Grupos glosa" to="/grupos-glosa" />
    </Item>
    
    </>
  ]

  render() {
    return (
      <AdminLTE title={["Rota", "Web"]} titleShort={["R", "W"]} theme="red" sidebar={this.sidebar}>
        <HelloWorld path="/hello-world" />
        <Agentes path="/agentes" />

      </AdminLTE>
    );
  }
}

export default App;