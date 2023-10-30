// Header.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LoginModal from '../componentes/Login';
import '../componentes/header.css';


const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleImageClick = () => {
    if (isLoginModalOpen) {
      setLoginModalOpen(false);
    } else {
      setLoginModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div className="contenedor-header">
      <div className="v1_161"></div>
      <Link href="/">
        <div className="menu-item">Menu</div>
      </Link>
      <Link href="/galeria">
        <div className="menu-item">Galeria</div>
      </Link>
      <Link href="/abogados">
        <div className="menu-item">Abogados</div>
      </Link>
      <Link href="/publicaciones">
        <div className="menu-item">Firmas</div>
      </Link>
      <Link href="/contactos">
      <div className="menu-item">Contactos</div>
      </Link>
      <div className="icono"></div>
      <div className="v1_161"></div>
      <div className="container-sesion">
        <div className="imagen" onClick={handleImageClick}></div>
        {isLoginModalOpen && <LoginModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Header;
