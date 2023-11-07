import '../contactos/contacto.css';
import Header from '../componentes/Headeradmin';

function Page() {
  return (
    <div>
      <div className="Contenedor-global">
      <div>
      <Header />
    </div>
<div className="contenedor-titulo">
  <div className="titulos">
    <div className="v1_22">Informacion de </div>
    <div className="v1_23">Contacto</div>
  </div>
</div>
        <div className="contenedor-info">
            <div className="contenedor-form">
            <form>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
      />
      <label htmlFor="telefono">Numero de telefono:</label>
      <input
        type="tel"
        id="nombre"
        name="nombre"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="nombre"
        name="nombre"
      />
      <label htmlFor="telefono">Titulo de la cita:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
      />
    <label htmlFor="telefono" className="large-text">
  Descripcion para la cita:
    </label>
    <textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>

      <button type="submit">Enviar mensaje</button>
    </form>
            </div>
            <div className="maps">
            <div className="imagen-maps">

            </div>
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
