"use client";
import '../contactos/contacto.css';
import Headeradmin from '../componentes/Headeradmin';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:9000');

function Page() {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const cita = (usuario) => {
    if(usuario.numeroTelefono){
      return(

        <div className="cita" key={usuario._id}>
          <div>Cita:</div>
          <div>Numero de telefono:{" " + usuario.numeroTelefono}</div>
          <div>Titulo de la cita:{" " + usuario.tituloCita}</div>
          <div>Descripcion{" " + usuario.descripcionCita}</div>
        </div>
      );
    }else{
      return (<div>{"Cita: sin registrar"}</div>);
    }
  }

    const usuario = JSON.parse(localStorage.getItem('authToken'));

    if (!usuario || !usuario.tipoUsuario === "admin") {
      window.location.href = "/";
    }


  const [usuarios,setUsuarios] = useState([]);
  const [botonBusquedaDesactivado, setBotonBusquedaDesactivado] = useState(false);
  const [datoBusqueda,setDatobusqueda] = useState('');

  const displayUsuarios = async() => {

    await axios.get('http://localhost:9000/usuario/getAll').then((response) => {

      if(response.data.resultado.length === 0){
        return;
      }

      let i = 0;
      let usuarios = [];

      response.data.resultado.forEach((usuario) => {
        usuarios[i] = (
          <div key={usuario._id} className="usuario">
            <div>Nombre: {usuario.nombre}</div>
            <div>Email: {usuario.email}</div>
            <div>{cita(usuario)}</div>
            <button className='boton-request' 
            onClick={() => iniciarChat(usuario._id)}>comenzar chat</button>
          </div>
        );
        i++;
      });

      setUsuarios(usuarios);

    }).catch((error) => {
      alert(error);
    });
  }

  const iniciarChat = async(_id) => {
    localStorage.setItem('_id', _id);
    try {
      socket.emit('usuario_conectado', { userId: _id });
      window.location.href = "/chat";
    } catch (error) {
      console.error('Error al iniciar el chat:', error);
    }
}
  
  useEffect(() => {
    displayUsuarios();
  },[]);

  const filter = async(e) => {

    e.preventDefault();

    setUsuarios([]);
    const e_value = datoBusqueda;

    setBotonBusquedaDesactivado(true);
    
    if(e_value.length === '' || !e_value){
      displayUsuarios();
      delay(3000);
      setBotonBusquedaDesactivado(false);
      return;
    }
    axios.get(`http://localhost:9000/usuario/filtro/${e_value}`).then((response) => {

      if(response.data.resultado.length === 0){
        delay(3000);
        setBotonBusquedaDesactivado(false);
        return;
      }

      let i = 0;
      let usuarios = [];

      response.data.resultado.forEach((usuario) => {
        usuarios[i] = (
          <div key={usuario._id} className="usuario">
            <div>Nombre: {usuario.nombre}</div>
            <div>Email: {usuario.email}</div>
            <div>{cita(usuario)}</div>
            <button className='boton-request' 
            onClick={() => iniciarChat(usuario._id)}>comenzar chat</button>
          </div>
        );
        i++;
      });

      setUsuarios(usuarios);

    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      delay(3000);
      setBotonBusquedaDesactivado(false);
    });

  }

  return (
    <div>
      <div className="Contenedor-global">
        <div>
          <Headeradmin />
        </div>
        <div className="contenedor-buscador">
          <div className="titulo-buscador">
            <div className="titulo1">Buscador de </div>
            <div className="titulo2">Usuarios</div>
          </div>
        </div>
        <div className="contenedor-buscador">
          <form onSubmit={filter}>
            <label htmlFor="busqueda">Buscar por nombre, email o teléfono:</label>
            <input type="text" id="busqueda" name="busqueda" onChange={(e) => setDatobusqueda(e.target.value)} />
            <button type='submit' disabled={botonBusquedaDesactivado}>Buscar</button>
          </form>
        </div>
        <div className="contenedor-usuarios">
          {usuarios}
        </div>
      </div>
    </div>
  );
}

export default Page;
