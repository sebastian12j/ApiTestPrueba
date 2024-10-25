import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Guardar la información en localStorage con isVerified en false inicialmente
    const user = { nombre, email, phone, password, isVerified: false };
    localStorage.setItem('user', JSON.stringify(user));

    // Redirigir a la página de verificación de teléfono
    navigate('/phoneverification');
  };

  return (
    <div className="registrar-container">
      <h1>Registrar</h1>
      <form>
        <label>Nombre Completo:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Teléfono:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button onClick={handleRegister}>Create</Button>
      </form>
    </div>
  );
};

export default Registrar;

