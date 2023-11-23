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
      <div className="container-menuinicio">
      <Link href="/">
        <div className="menu-item">Menú</div>
      </Link>
      <Link href="/galeria">
        <div className="menu-item">Galería</div>
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
      </div>
      <img src="/images/IconoB_preview_rev_1.png" className="icono" alt="Descripción de la imagen"/>
      <img src="/images/Sesion.png" className="imagen" alt="Descripción de la imagen"/>
      <div className="container-sesion">
        <div className="imagen" onClick={handleImageClick}></div>
        {isLoginModalOpen && <LoginModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Header;
