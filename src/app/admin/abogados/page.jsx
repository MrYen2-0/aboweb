"use client";
import { useState } from 'react';
import '../abogados/adminabogado.css';
import Headeradmin from '../componentes/Headeradmin'; // Asegúrate de importar Header desde el lugar correcto
import { useEffect } from 'react';
import axios from 'axios';
function Page() {
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('authToken'));
    if (!usuario || !usuario.tipoUsuario === "admin") {
      window.location.href = "/";
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [nombre,setNombre] = useState('');
  const [area,setArea] = useState('');
  const [descripcion,setDescripcion] = useState('');
  const [nombreDel,setNombreDel] = useState('');
  const [abogados,setAbogados] = useState([]);

  const displayAbogados = async() => {
    await axios.get("http://localhost:9000/abogado/getAll").then((response) => {
    if(response.data.resultado.length === 0){
      console.log("no hay abogados");
      return;
    }

    let abogados = [];
    let i = 0;

    response.data.resultado.forEach((abogado) => {
      abogados[i] = (
      <div className="cuadros-abogados">
        <div className="texto-abogado">
            <div className="titulo-abogado">
              {abogado.nombre}
            </div>
            <div className="descripcion-abogado">
              {abogado.descripcion}
            </div>
          </div>
          <div className="imagen-abogado">
            <img src="/images/persona.png" className="persona-abogado" alt="persona-abogado"/>
          </div>
          <div className="areas-abogado">
            {abogado.area}
          </div>
      </div>);
      i++;
    });
    setAbogados(abogados);
    }).catch((error) => {
      alert(error);
    });
  }

  useEffect(() => {
    displayAbogados();
  },[]);

  const handleAgregarAbogado = async() => {
    if((nombre === '' || area === '') || descripcion === ''){
      alert("favor de ingresar todos los datos");
      return;
    }
    const data = {
      nombre: nombre,
      area: area,
      descripcion: descripcion
    }
    await axios.post('http://localhost:9000/abogado/agregar', data).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      alert(error);
    });

  }
  const handleEliminarAbogado = async() => {
    if(nombreDel === '' || nombreDel.length === 0){
      alert("favor de ingresar el nombre del abogado");
      return;
    }
    await axios.delete(`http://localhost:9000/abogado/eliminar/${nombreDel}`).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      alert(error);
    });
  }
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
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="area">Área de práctica:</label>
        <input type="text" id="area" placeholder="Área de práctica" onChange={(e) => setArea(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)}></textarea>
      </div>

      <div className="botones">
        <button style={{ backgroundColor: 'red' }} onClick={() => setShowForm(false)}>Cancelar</button>
        <button onClick={handleAgregarAbogado}>Aceptar</button>
      </div>
    </div>
  </div>
  
  )}
  {showDeleteForm && (
    <div className="overlay">
      <div className="formulario-abogado">
        <input type="text" placeholder="Nombre del abogado a eliminar" onChange={(e) => setNombreDel(e.target.value)}/>
        <div className="botones">
        <button style={{backgroundColor: 'blue'}} onClick={() => setShowDeleteForm(false)}>Cerrar</button>
        <button style={{backgroundColor: 'red'}} onClick={handleEliminarAbogado}>Borrar</button>
      </div>      
      </div>
    </div>
  )}
</div>

        <div className="contenedor-abogados">
          <div className="imagenes-abogados">
          {abogados}
          </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
