// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Necesitamos react-router-dom para las rutas

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/historias">Historias</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/registro">Registro</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;