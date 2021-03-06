import React from 'react'
import '../styles/sidebar.css'; 

export default function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
    <a href="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <img src="https://treinamento.rota.pm.rn.gov.br/vendor/adminlte/dist/img/RotaLogo.png" className="rounded-circle me-2" width="40" height="32"></img>
      <span className="fs-4">RotaWeb</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <i className="bi bi-house me-2" width="16" height="16"></i>
          Home
        </a>
      </li>
      <li>
        <a href="/agentes" className="nav-link text-white">
          <i className="bi bi-person me-2" width="16" height="16"></i>
          Agentes
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-speedometer me-2" width="16" height="16"></i>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi me-2" width="16" height="16"></i>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi me-2" width="16" height="16"></i>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  )
}
