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
      <Link href="/admin/menu">
        <div className="menu-item">Menu</div>
      </Link>
      <Link href="/admin/galeria">
        <div className="menu-item">Galeria</div>
      </Link>
      <Link href="/admin/abogados">
        <div className="menu-item">Abogados</div>
      </Link>
      <Link href="/admin/firmas">
        <div className="menu-item">Firmas</div>
      </Link>
      <Link href="/admin/contactos">
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