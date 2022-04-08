import '../styles/index.css'; 
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import React from 'react';

function Dashboard(){
  
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
    );
  }

export default Dashboard;