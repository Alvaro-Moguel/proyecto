// src/components/Home.js
import React from 'react';
import './Home.css';  // Asegúrate de que este archivo exista en la misma carpeta

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos a Residencial Los Robles</h1>
      <img 
        src={process.env.PUBLIC_URL + '/images/Foto Fraccionamiento los Robles.jpeg'} 
        alt="Residencial Los Robles" 
        className="hero-image" 
      />
      <div className="story">
        <h2>¿Por qué Residencial Los Robles es el mejor lugar para vivir?</h2>
        <p>
          Residencial Los Robles es un fraccionamiento de lujo ubicado en una zona tranquila y segura. Con acceso
          a todas las comodidades modernas y un entorno natural inigualable, nuestros residentes disfrutan de una
          vida cómoda y relajante. Ven y descubre por qué somos la mejor opción para vivir en la ciudad.
        </p>
      </div>
    </div>
  );
};

export default Home;

//Cambio 1