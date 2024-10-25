// Iniciopagina2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const Iniciopagina2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/pagina3');
  };

  return (
    <div className='iniciopagina'>
          <img 
          src={require("../imagenes/Svg2.png")} 
           alt="Descripción de la imagen 3"
            className="imagen-pagina" />
      <h2>See your goals</h2>
      <p>Learn and learn new things every day and get rewards on top</p>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default Iniciopagina2;
