"use client";
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { io } from 'socket.io-client';

const socket = io('http://localhost:9000');

const RegisterModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Crear un estado para controlar la visibilidad de la alerta y una función para cambiarlo
  const [visible, setVisible] = useState(false);
  // Crear otro estado para guardar el mensaje de la alerta y una función para cambiarlo
  const [message, setMessage] = useState("");
  // Crear una referencia al elemento input del nombre usando el hook useRef
  const nameRef = useRef(null);

  const toggle = () => setVisible(!visible);

  const changeMessage = (text) => setMessage(text);

  const handleRegister = async () => {
    // Obtener el valor del input del nombre usando la referencia
    var nombre = nameRef.current.value;
    // Llamar a la función de validación con el valor del input
    var resultado = validarNombre(nombre);
    // Mostrar una alerta si el nombre no es válido
    if (!resultado) {
      // Reemplazar la función alert por el componente Alert
      changeMessage("El nombre no es válido");
      toggle();
      return;
    }
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      // Reemplazar la función alert por el componente Alert
      changeMessage("favor de ingresar todos los datos");
      toggle();
      return;
    }
    if (!(password === confirmPassword)) {
      // Reemplazar la función alert por el componente Alert
      changeMessage("contraseñas no coinciden");
      toggle();
      return;
    }
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    );
    if (!emailRegex.test(email)) {
      // Reemplazar la función alert por el componente Alert
      changeMessage("formato de email invalido");
      toggle();
      return;
    }
    let data = {
      nombre: name,
      email: email,
      contrasenia: password,
    };
    await axios
      .post("http://localhost:9000/usuario/registrarse", data)
      .then((response) => {
        // Reemplazar la función alert por el componente Alert
        changeMessage("Felicidades por registrarte, ahora inicia sesión para continuar.");
        toggle();
      })
      .catch((error) => {
        // Reemplazar la función alert por el componente Alert
        changeMessage("ha habido un error " + error);
        toggle();
        return;
      });
  };

  // Crear una función de validación que reciba el valor del input y compruebe si cumple con una expresión regular que solo permita letras
  function validarNombre(valor) {
    // Crear una expresión regular que solo permita letras mayúsculas y minúsculas
    var regex = /^[A-Za-z]+$/;
    // Devolver true si el valor cumple con la expresión regular, o false si no
    return regex.test(valor);
  }

  return (
    <div className="login-modal-sesion">
      <div className="register-content">
        <h2>Registro</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // Asignar la referencia al elemento input del nombre usando el atributo ref
          ref={nameRef}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="botones">
          <button onClick={handleRegister}>Registrarse</button>
          <button onClick={onClose}>Cerrar</button>
        </div>
        {/* Usar el componente Alert dentro del JSX, pasándole las propiedades que quieras */}
        <Alert
          color="success"
          isOpen={visible}
          toggle={toggle}
          style={{ position: "fixed", top: 0, right: 0 }}
        >
          {message}
        </Alert>
      </div>
    </div>
  );
};

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);
  const [message, setMessage] = useState("");
  const changeMessage = (text) => setMessage(text);

  const handleLogin = async () => {

    if (email === "" || password === "") {
      changeMessage("ingresa los datos");
      toggle();
      return;
    }
    await axios.get(`http://localhost:9000/usuario/login/${email}/${password}`, {}).then((response) => {
        if (response.data.resultado === false) {
          changeMessage("el usuario no existe");
          toggle();
        } else {
          const token = JSON.stringify(response.data.resultado);
          localStorage.setItem("authToken", token);
          socket.emit('usuario_conectado', { userId: response.data.resultado._id });
          if (response.data.resultado.tipoUsuario === "admin") {
            window.location.href = "http://localhost:3000/admin/contactos";
          } else {
            window.location.href = "http://localhost:3000/cliente/menu";
          }
        }
      })
      .catch((error) => {
        console.log(error);
        changeMessage("error al iniciar sesion " + error);
        toggle();
      });
  };

  if (showRegister) {
    return <RegisterModal onClose={() => {setShowRegister(false); onClose();}} />;
  }

  return (
    <div className="login-modal-sesion">
      <div className="login-content">
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="botones">
          <button onClick={handleLogin}>Entrar</button>
          <button onClick={onClose}>Cerrar</button>
        </div>
        <p>
          ¿No tienes cuenta?{" "}
          <span className="register-link" onClick={() => setShowRegister(true)}>
            Regístrate
          </span>
        </p>
        {/* Usar el componente Alert dentro del JSX, pasándole las propiedades que quieras */}
        <Alert color="danger" isOpen={visible} toggle={toggle}>
        {message}
        </Alert>
      </div>
    </div>
  );
};

export default LoginModal;
