// Navbar.js
import React, { useEffect, useState } from 'react';
import '../hoja-de-estilos/Navbar.css';
import notificationIcon from '../imagenes/Notification.png'; // Ruta de la imagen del ícono de notificaciones
import coinIcon from '../imagenes/moneda.png'; // Ruta de la imagen del ícono de monedas

const NavBar = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.nombre) {
      setUserName(user.nombre);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>{userName}</h2>
        <p>Let’s start learning</p>
      </div>
      <div className="navbar-right">
        <img src={notificationIcon} alt="Notificaciones" className="icon" />
        <img src={coinIcon} alt="Monedas" className="icon" />
      </div>
    </div>
  );
};

export default NavBar;
