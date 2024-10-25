import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../hoja-de-estilos/InicioLogo.css'
import "../hoja-de-estilos/estilosGlobales.css"
const InicioLogo = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/inicio');
    };
  
    return (
      <div className='iniciologo'>
        <img 
          className='imagen-logo' 
          src={require("../imagenes/Logo.png")} 
          alt="foto de emma" 
          onClick={handleClick} 
        />
      </div>
  )
}

export default InicioLogo
