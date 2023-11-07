"use client";
import { useState } from 'react';
import '../abogados/abogado.css';
import Header from '../componentes/Headeradmin'; // Asegúrate de importar Header desde el lugar correcto

function Page() {
  // Estado para llevar un registro del número de cuadros creados
  const [cuadroCount, setCuadroCount] = useState(3);

  // Función para agregar un nuevo cuadro
  const agregarCuadro = () => {
    setCuadroCount(cuadroCount + 1);
  };
  return (
    <div>
      <div className="Contenedor-global">
      <div>
      <Header />
    </div>
<div className="contenedor-titulo">
  <div className="titulos">
    <div className="v1_22">Abogados </div>
    <div className="v1_23">De la firma</div>
  </div>
</div>
        <div className="contenedor-info">
          <div className="imagenes-info">
            
          <div className="v1_56">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Jose Luis Flores Cortes
              </div>
              <div className="descripcion-abogado">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              , when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="imagen-abogado">
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA:   Civil, Mercantil, Laboral,
            </div>
          </div>
          <div className="v1_57">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Jose Luis Flores Cortes
              </div>
              <div className="descripcion-abogado">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              , when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="imagen-abogado">
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA:   Civil, Mercantil, Laboral,
            </div>
          </div>
          <div className="v1_58">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Jose Luis Flores Cortes
              </div>
              <div className="descripcion-abogado">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              , when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="imagen-abogado">
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA:   Civil, Mercantil, Laboral,
            </div>
          </div>
          
          <button id="agregar-cuadro" onClick={agregarCuadro}>+</button>
          </div>
      </div>
      <div className="contenedor-footer">
        <div className="footer-container">
          <div className="footer-info">
      <div className="v1_125">Informacion</div>
      <div className="v1_120">Menu</div>
      <div className="v1_121">Galeria</div>
      <div className="v1_122">Abogado</div>
      <div className="v1_123">Contactos</div>
      <div className="v1_124">Publicaciones</div>
      </div>

      <div className="footer-info">
      <div className="v1_126">Contactos</div>
      <div className="v1_136">1234 Sample Street Austin Texas 78704</div>
      <div className="v1_117">512.333.2222</div>
      <div className="v1_118">sampleemail@gmail.com</div>
      </div>

      <div className="footer-info">
          <div className="v1_102">Medios sociales</div>
          <div className="v1_104"></div>
          <div className="v1_106"></div>
        </div>
        </div>

          <div className="v1_98"></div>
          <div className="v1_99">© 2021 All Rights Reserved</div>
        
      </div>
    </div>
  </div>
  );
}

export default Page;
