import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../hoja-de-estilos/LLogin.css'; 
import { Button } from './Button';

const LLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtén los datos del usuario almacenado en localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validar si el usuario está registrado y si está verificado
    if (storedUser) {
      if (storedUser.phone === phoneNumber && storedUser.password === password) {
        if (storedUser.isVerified) {
          navigate('/MenuPrincipal'); // Redirigir a MenuPrincipal.js si el usuario está verificado
        } else {
          setErrorMessage('Debes completar la verificación antes de iniciar sesión.');
        }
      } else {
        setErrorMessage('Número de teléfono o contraseña incorrectos.');
      }
    } else {
      setErrorMessage('No existe una cuenta con esos datos.'); // Mensaje de advertencia si el usuario no está registrado
    }
  };

  const handleRedirectToRegister = () => {
    navigate('/Registrar'); // Redirigir a Registrar.js
  };

  return (
    <div className="login-container">
      <h1>WELCOME TO BACK</h1>
      <p>Sign in to an existing account using your phone number</p>
      <form className='formulario-login' onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Número de teléfono"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Iniciar Sesión</Button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>
        ¿No tienes una cuenta?{' '}
        <Button onClick={handleRedirectToRegister}>Regístrate aquí</Button>
      </p>
    </div>
  );
};

export default LLogin;

