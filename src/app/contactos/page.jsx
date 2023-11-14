import '../contactos/contacto.css';
import Header from '../componentes/Header';

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
        <div className="contenedor-maps">
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
            <img src="/images/Screenshot_73.png" alt="maps" className="imagen-maps"/>
            </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
