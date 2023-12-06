"use client";
import "../contactos/contacto.css";
import Header from "../componentes/Header";
import { useState, useEffect } from "react";
import axios from "axios";
// Importar el componente Alert de reactstrap y el CSS de bootstrap
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Page() {
  const [telefono, setTelefono] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // Crear un estado para controlar la visibilidad de la alerta y una función para cambiarlo
  const [visible, setVisible] = useState(false);
  // Crear otro estado para guardar el mensaje de la alerta y una función para cambiarlo
  const [message, setMessage] = useState("");

  const toggle = () => setVisible(!visible);

  const changeMessage = (text) => setMessage(text);

  const guardarInfo = async (e) => {
    e.preventDefault();

    if ((telefono === "" || titulo === "") || descripcion === "") {
      // Reemplazar la función alert por el componente Alert
      changeMessage("favor de ingresar todos los datos");
      toggle();
      return;
    }

    const regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(telefono)) {
      // Reemplazar la función alert por el componente Alert
      changeMessage(
        "favor de ingresar un numero de telefono valido con el formato 1231231234"
      );
      toggle();
      return;
    }

    const data = {
      telefono: telefono,
      titulo: titulo,
      descripcion: descripcion,
    };

    const usuario = JSON.parse(localStorage.getItem("authToken"));

    await axios
      .put(`http://localhost:9000/usuario/guardarInfo/${usuario._id}`, data)
      .then((response) => {
        if (!response) {
          // Reemplazar la función alert por el componente Alert
          changeMessage("no ha habido respuesta del servidor");
          toggle();
          return;
        }
        // Reemplazar la función alert por el componente Alert
        changeMessage("Gracias por citarnos, espera hasta que te contactemos, que tengas un buen día.");
        toggle();
      })
      .catch((error) => {
        // Reemplazar la función alert por el componente Alert
        changeMessage(error);
        toggle();
      });
  };

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("authToken"));

    if (!usuario) {
      window.location.href = "/";
    }
  }, []);

  const fields = [
    <label>Número de teléfono</label>,
    <label>Título de la cita</label>,
  ];

  return (
    <div className="Contenedor-global">
      <Header />
      <div className="contenedor-titulo14">
        <div className="titulos-contacto">
          <div className="titulo12">Información de </div>
          <div className="titulo13">Contacto</div>
        </div>
      </div>
      <div className="contenedor-maps">
        <div className="contenedor-form">
          <form onSubmit={guardarInfo}>
            <label>{fields[0]}</label>
            <input
              type="text"
              onChange={(e) => setTelefono(e.target.value)}
              maxLength={10}
            />
            <label>{fields[1]}</label>
            <input type="text" onChange={(e) => setTitulo(e.target.value)} />
            <label htmlFor="comentario" className="large-text">
              Descripción para la cita:
            </label>
            <textarea
              id="comentario"
              name="comentario"
              rows="4"
              cols="50"
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
          {/* Usar el componente Alert dentro del JSX, pasándole las propiedades que quieras */}
          <Alert
            color="success"
            isOpen={visible}
            toggle={toggle}
            style={{ position: "fixed", top: 0, right: 0, zIndex: 100 }}
          >
            {message}
          </Alert>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.1415529871061!2d-93.12787318281201!3d16.756434783190926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8fa8181f8d9%3A0xe9f47aae7a693d09!2sIMI%20Civiles%20del%20Sur!5e0!3m2!1ses-419!2smx!4v1700609126431!5m2!1ses-419!2smx"
            className="mapa-incrustado"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Page;
