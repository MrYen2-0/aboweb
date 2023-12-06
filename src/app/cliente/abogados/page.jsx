"use client";
import { useState } from 'react';
import '../abogados/abogado.css';
import Header from '../componentes/Header';
import { useEffect } from 'react';
import axios from 'axios';

function Page() {

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

  return (
    <div>
      <div className="Contenedor-global">
      <div>
      <Header />
    </div>
<div className="contenedor-tituloabogados">
  <div className="titulos">
    <div className="titulo3">Abogados </div>
    <div className="titulo4">De la firma</div>
  </div>
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
