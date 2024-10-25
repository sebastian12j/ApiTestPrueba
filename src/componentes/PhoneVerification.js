import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const PhoneVerification = () => {
  const [inputCode, setInputCode] = useState('');
  const [generatedCode] = useState('123456'); // Código simulado
  const navigate = useNavigate();

  const handleVerify = () => {
    if (inputCode === generatedCode) {
      // Actualizar el estado de verificación del usuario en localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));

      // Si el usuario está almacenado, actualiza el estado de verificación
      if (storedUser) {
        storedUser.isVerified = true;
        localStorage.setItem('user', JSON.stringify(storedUser));
      }

      // Redirigir al login después de la verificación
      navigate('/llogin');
    } else {
      alert('Código incorrecto. Intenta nuevamente.');
    }
  };

  return (
    <div className="phone-verification-container">
      <h1>Verificación de Teléfono</h1>
      <p>Ingresa el código de verificación enviado a tu número de teléfono.</p>
      <input
        type="text"
        placeholder="Código de verificación"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        required
      />
      <Button onClick={handleVerify}>Verificar</Button>
    </div>
  );
};

export default PhoneVerification;
