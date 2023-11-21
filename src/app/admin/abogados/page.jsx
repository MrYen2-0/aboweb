"use client";
import { useState } from 'react';
import '../abogados/adminabogado.css';
import Headeradmin from '../componentes/Headeradmin'; // Asegúrate de importar Header desde el lugar correcto

function Page() {
  const [showForm, setShowForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  return (
    <div>
      <div className="Contenedor-global">
      <div>
      <Headeradmin />
    </div>
    <div className="contenedor-titulo">
  <div className="titulos">
    <div className="titulo3">Abogados </div>
    <div className="titulo4">De la firma</div>
  </div>
  <div className="botones">
    <button className="boton" onClick={() => setShowForm(true)}>Agregar abogado</button>
    <button className="boton" style={{backgroundColor: 'red'}} onClick={() => setShowDeleteForm(true)}>Eliminar abogado</button>
  </div>
  {showForm && (
    <div className="overlay">
      <div className="formulario-abogado">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Área de práctica" />
        <textarea placeholder="Descripción"></textarea>
        <div className="botones">
        <button style={{backgroundColor: 'red'}} onClick={() => setShowForm(false)}>Cancelar</button>
        <button>Aceptar</button>
        </div>
      </div>
    </div>
  )}
  {showDeleteForm && (
    <div className="overlay">
      <div className="formulario-abogado">
        <input type="text" placeholder="Nombre del abogado a eliminar" />
        <div className="botones">
        <button style={{backgroundColor: 'blue'}} onClick={() => setShowDeleteForm(false)}>Cerrar</button>
        <button style={{backgroundColor: 'red'}}>Borrar</button>
      </div>      
      </div>
    </div>
  )}
</div>

        <div className="contenedor-abogados">
          <div className="imagenes-abogados">
          <div className="cuadros-abogados">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Juan Carlos Garcia Perez 
              </div>
              <div className="descripcion-abogado">
              Licenciado en derecho, maestría en derechos humanos y amparo, 
              maestría en derecho de empresas, 
              doctorado en derechos humanos. 
              Miembro de la Academia Mexicana del Derecho Procesal del Trabajo, capítulo Chiapas.
              </div>
            </div>
            <div className="imagen-abogado">
            <img src="/images/persona.png" className="persona-abogado" alt="persona-abogado"/>
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA: Defensa de area empresarial 
            </div>
          </div>
          <div className="cuadros-abogados">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Martín Oswaldo Flores Vázquez
              </div>
              <div className="descripcion-abogado">
              Licenciado en derecho, maestro en derechos humanos y amparo, 
              doctorado en derechos humanos.
               Miembro numerario de la Sociedad Legal Internacional "J. Reuben Clark".
              </div>
            </div>
            <div className="imagen-abogado">
            <img src="/images/persona.png" className="persona-abogado" alt="persona-abogado"/>
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA:   Defensa del área empresarial
            </div>
          </div>
          <div className="cuadros-abogados">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Jimmy Alexander Castillejos Alfonzo
              </div>
              <div className="descripcion-abogado">
              Licenciado en derecho y Maestrante en derechos humanos y amparo.
              </div>
            </div>
            <div className="imagen-abogado">
            <img src="/images/persona.png" className="persona-abogado" alt="persona-abogado"/>
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA:   Defensa del área laboral trabajadora.
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
