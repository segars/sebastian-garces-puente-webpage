import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Inicio';
import Navegador from './Components/Navegador';
import Contacto from './Components/Contacto';
import LoginForm from './Components/LoginForm';
import Footer from './Components/Footer';
import Proyectos from './Components/Proyectos';


function App() {
  const [currentPage, setCurrentPage] = useState('Inicio'); 


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navegador currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'Inicio' && <Navbar />}
      {currentPage === 'Contacto' && <Contacto />}
      {currentPage === 'IniciarSesion' && <LoginForm />}
      {currentPage === 'Proyectos' && <Proyectos />}
      <Footer /> {}
    </div>
  );
}

export default App;




