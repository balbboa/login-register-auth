import React from 'react';
import '../styles/index.css'; 
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Api from '../services/api';

export default function Agentes(){
      
      return (

        <>
        <Navbar />
        <Sidebar />
        <div>
          <Api/>
        </div>
        </>
        )
    }
