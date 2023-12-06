"use client";
// Zoomj.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';

const Zoom = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="imagenes-info">
      <div className="imagenes-oficinas">
        <img src="/images/nuevaentrada.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevaentrada.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/pasillo1.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/pasillo1.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/nuevopasillo11.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevopasillo11.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/nuevasoficinas.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevasoficinas.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/nuevasoficinas1.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevasoficinas1.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/nuevasoficinas2.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevasoficinas2.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/nuevasoficinas21.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevasoficinas21.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/nuevasoficinas3.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevasoficinas3.jpg')}/>
      </div>
      <div className="imagenes-oficinas">
        <img src="/images/nuevasoficinas4.jpg" className="imagenes-edificios" alt="Edificio" onClick={() => openModal('/images/nuevasoficinas4.jpg')}/>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
        <img src={selectedImage} alt="Selected" />
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Zoom;
