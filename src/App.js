// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';  // Importa el NavBar
import Home from './components/Home';  // Importa la página de inicio
import Registro from './components/Registro';  // Importa la página de registro
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        {/* Puedes agregar más rutas aquí para Historias y Reportes */}
      </Routes>
    </Router>
  );
}

export default App;