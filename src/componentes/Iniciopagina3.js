// Iniciopagina3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
const Iniciopagina3 = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/LLogin')}
    ;
  return (
    <div className='iniciopagina'>
    <img 
    src={require("../imagenes/Svg3.png")} 
     alt="Descripción de la imagen 3"
      className="imagen-pagina" />
      <h2>Move on to the next course</h2>
      <p>Don't stop at one, start learning the next and make progress.</p>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default Iniciopagina3;
