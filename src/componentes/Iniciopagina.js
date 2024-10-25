// Iniciopagina.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../hoja-de-estilos/estilosGlobales.css"
import { Button } from './Button';

const Iniciopagina = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/pagina2');
  };

  return (
    
    <div className='iniciopagina'>
          <img 
          src={require("../imagenes/svg.png")} 
           alt="Descripción de la imagen 3"
            className="imagen-pagina" />
      <h2>Explore new courses</h2>
      <p>Study and watch all our new courses and there are many of them</p>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default Iniciopagina;