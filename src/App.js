import axios from 'axios';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';

// axios.defaults.baseURL = "http://localhost:8000/";


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