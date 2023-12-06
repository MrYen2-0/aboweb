"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

const ProfileModal = ({ onClose, user }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  return (
    <div className="profile-modal">
      <div className="profile-content">
        <h2>Perfil</h2>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <div className="botones">
        <Link href="/">
        <button onClick={handleLogout}>Cerrar sesión</button>
        </Link>
        <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {

  const [user, setUser] = useState({ name: '', email: '' });

  const [showProfile, setShowProfile] = useState(true);

  const handleLogout = () => {
    setUser(null);
    setShowProfile(false);
  };

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('authToken'));

    if (usuario) {
      setUser({ name: usuario.nombre, email: usuario.email });
    }
  }, []);

  if (showProfile && user) {
    return <ProfileModal onClose={() => setShowProfile(false)} onLogout={handleLogout} user={user} />;
  }

  return null;
};

export default App;
