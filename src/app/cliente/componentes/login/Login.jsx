"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión, por ejemplo, enviando una solicitud al servidor.
  };

  return (
    <div className="login-modal">
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
        <button onClick={handleLogin}>Entrar</button>
        <p>¿No tienes cuenta? <Link href="/register"><a>Regístrate</a></Link></p>
      </div>
    </div>
  );
};

export default Login;
