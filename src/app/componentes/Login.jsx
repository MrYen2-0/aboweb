"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const RegisterModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes manejar la lógica de registro, por ejemplo, enviando una solicitud al servidor.
  };

  return (
    <div className="login-modal-sesion">
      <div className="register-content">
        <h2>Registro</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="botones">
          <button onClick={handleRegister}>Registrarse</button>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión, por ejemplo, enviando una solicitud al servidor.
  };

  if (showRegister) {
    return <RegisterModal onClose={() => {setShowRegister(false); onClose();}} />;
  }

  return (
    <div className="login-modal-sesion">
      <div className="login-content">
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="botones">
          <Link href="/admin/contactos">
            <button onClick={handleLogin}>Entrar</button>
          </Link>
          <button onClick={onClose}>Cerrar</button>
        </div>
        <p>¿No tienes cuenta? <span className="register-link" onClick={() => setShowRegister(true)}>Regístrate</span></p>
      </div>
    </div>
  );
};

export default LoginModal;
