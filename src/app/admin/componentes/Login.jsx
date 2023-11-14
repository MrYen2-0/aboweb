"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ProfileModal = ({ onClose, user }) => {
  const handleLogout = () => {
    // Aquí puedes manejar la lógica de cierre de sesión, por ejemplo, eliminando la información del usuario.
  };

  return (
    <div className="profile-modal">
      <div className="profile-content">
        <h2>Perfil</h2>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <Link href="/">
        <button onClick={handleLogout}>Cerrar sesión</button>
        </Link>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState({ name: 'Administrador', email: 'admin@gmail.com' });
  const [showProfile, setShowProfile] = useState(true);

  const handleLogout = () => {
    setUser(null);
    setShowProfile(false);
  };

  if (showProfile && user) {
    return <ProfileModal onClose={() => setShowProfile(false)} onLogout={handleLogout} user={user} />;
  }

  return null;
};

export default App;
