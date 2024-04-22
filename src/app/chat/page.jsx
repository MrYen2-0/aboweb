import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./chat.css";
import axios from "axios";

const socket = io("http://localhost:9000");

function Chat() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      let usuario = JSON.parse(localStorage.getItem("authToken"));

      if (!usuario) {
        window.location.href = "/";
      }
    }
  }, [isClient]);

  const requerirInformacionChat = async (chatMateId) => {
    await axios
      .get(`http://localhost:9000/usuario/requerirInfo/${chatMateId}`)
      .then((response) => {
        console.log(response);
        if (
          response.data.resultado.error ||
          response.data.resultado === false
        ) {
          return;
        }
        setChatMateInfo({
          nombre: response.data.resultado.nombre,
          tipoUsuario: response.data.resultado.tipoUsuario,
        });
      })
      .catch((error) => {
        alert("error" + error.message);
      });
  };

  const [mensaje, setMensaje] = useState("");
  const [chat, setChat] = useState([{ mensaje: "", remitente: "" }]);
  const [chatMateInfo, setChatMateInfo] = useState({
    nombre: "",
    tipoUsuario: "",
  });
  const [infoBool, setInfoBool] = useState(false);

  useEffect(() => {
    socket.on("confirmar_chat", (data) => {
      console.log(data);
      requerirInformacionChat(data);
    });

    socket.on("enviar_mensaje", (data) => {
      setChat((prevMessages) => [
        ...prevMessages,
        { remitente: "otro", mensaje: data.mensaje },
      ]);
    });

    return () => {
      socket.off("connect", () => setIsConnected(false));
      socket.off("enviar_mensaje");
      socket.off("confirmar_chat");
      if (isClient) {
        localStorage.removeItem("_id");
      }
    };
  }, [isClient]);

  const handleEnter = (e) => {
    if (e.key === "Enter" && mensaje.trim() !== "") {
      e.preventDefault();
      if (e.keyCtrl) {
        setMensaje((mensaje) => mensaje + "\n");
      } else {
        socket.emit("enviar_mensaje", {
          mensaje,
          idUsuarioReceptor: usuario._id,
        });
        setChat((prevMessages) => [
          ...prevMessages,
          { remitente: "yo", mensaje },
        ]);
        setMensaje("");
      }
    }
  };

  return (
    <div>
      <header className="their-container">
        <div>
          <p className="their-name">
            {chatMateInfo.nombre !== "" ? chatMateInfo.nombre : "desconocido"}
          </p>
          <p className="their-userType">
            {chatMateInfo.nombre !== ""
              ? chatMateInfo.tipoUsuario
              : "desconocido"}
          </p>
        </div>
      </header>
      <main>
        {chat.map((mensaje, index) => (
          <div
            key={index}
            className={mensaje.remitente === "yo" ? "miMensaje" : "suMensaje"}
          >
            {mensaje.mensaje}
          </div>
        ))}
      </main>
      <footer>
        <textarea
          className="mensaje-container"
          placeholder="escribe tu mensaje"
          onChange={(e) => setMensaje(e.target.value)}
          onKeyDown={handleEnter}
          value={mensaje}
        ></textarea>
      </footer>
    </div>
  );
}

export default Chat;
