import React, { Component } from 'react';
import AdminLTE, { Sidebar, Navbar } from 'adminlte-2-react';
import HelloWorld from '../components/helloworld'
import Agentes from '../components/agentes'
import '../styles/index.css'; 

const { Item } = Sidebar;
const {
  Entry
} = Navbar;

class Dashboard extends Component {

  sidebar = [
    <>
      <Item icon='fa-file-alt' text="Escala de Serviço" to="/escala" />
      <Item icon='fa-search' text="Consultar Escala do Agente" to="/consultar-escala" />
      <Item icon='fa-utensils' text="Pedido de Auxílio Alimentação" to="/pedido-vale" />
      <Item icon='fa-money-bill-alt' text="Remessa de Pagamento Vale Refeição" to="/remessa-vale" />
      <Item icon='fa-donate' text="Pedido de Diária Operacional" to="/pedido-diaria" />
      <Item icon='fa-money-bill-wave' text="Remessa de Pagamento Diária Operacional" to="/remessa-diaria" />
      <Item active text="Minha Área">
        <Item icon='fa-file-alt' text="Minhas Escalas" to="/minhas-escalas" />
        <Item icon='fa-file-alt' text="Meus Vales" to="/meus-vales" />
        <Item icon='fa-wallet' text="Minhas Diárias" to="/minhas-diarias" />
        <Item icon='fa-calendar-check' text="Marcação de Diárias" to="/marcacao-diarias" />
      </Item> 
      <Item active text="Gerenciar Permissões">
        <Item icon='fa-users' text="Usuários" to="/usuarios" />
        <Item icon='fa-book' text="Perfis" to="/perfis" />
        <Item icon='fa-book' text="Permissões" to="/permissoes" />
      </Item> 
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
      <Item active text="Auditoria">
        <Item icon='fa-donate' text="Diária" to="/diaria" />
        <Item icon='fa-handshake' text="Reembolso Diária" to="/reembolso-diaria" />
        <Item icon='fa-utensils' text="Vale" to="/vale" />
        <Item icon='fa-handshake' text="Reembolso Vale" to="/reembolso-vale" />
      </Item>   
      <Item active text="Financeiro">
        <Item icon='fa-fa-money-bill-alt' text="Remessa de Pagamento Vale Refeição" to="/remessa-pagamento-vale" />
        <Item icon='fa-fa-money-bill-alt' text="Remessa de Pagamento Diária Operacional" to="/remessa-pagamento-diaria" />
      </Item>
      <Item icon='fa-medal' text="Créditos" to="/creditos" />
    </>
  ]

  render() {
    return (
        <AdminLTE title={["Rota", "Web"]} titleShort={["R", "W"]} theme="red" sidebar={this.sidebar}>
          <Navbar.Core>
            <Entry
              icon="fa-expand-arrows-alt"
            />
            <Entry icon="fa-comment-dots"></Entry>
            <Entry
              icon="fa-power-off"
            ></Entry>
          </Navbar.Core>
          <HelloWorld path="/hello-world" />
          <Agentes path="/agentes" />
        </AdminLTE>
    );
  }
}

export default Dashboard;