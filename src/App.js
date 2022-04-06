import axios from 'axios';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


function App () {

    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;