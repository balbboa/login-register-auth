import axios from 'axios';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Agentes from './pages/agentes'
import Create from './services/api';

// axios.defaults.baseURL = "http://localhost:8000/";
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App () {

    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agentes" element={<Agentes />} />
            <Route element={<Create />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;