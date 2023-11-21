import '../contactos/contacto.css';
import Header from '../componentes/Header';

const FormField = ({ label, type, id }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={id} />
  </>
);

function Page() {
  const fields = [
    { label: 'Nombre:', type: 'text', id: 'nombre' },
    { label: 'Numero de telefono:', type: 'tel', id: 'telefono' },
    { label: 'Titulo de la cita:', type: 'text', id: 'titulo' },
  ];

  return (
    <div className="Contenedor-global">
      <Header />
      <div className="contenedor-titulo">
        <div className="titulos">
          <div className="v1_22">Informacion de </div>
          <div className="v1_23">Contacto</div>
        </div>
      </div>
      <div className="contenedor-maps">
        <div className="contenedor-form">
          <form>
            {fields.map(field => <FormField key={field.id} {...field} />)}
            <label htmlFor="comentario" className="large-text">Descripcion para la cita:</label>
            <textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
        <div className="maps">
          <img src="/images/Screenshot_73.png" alt="maps" className="imagen-maps"/>
        </div>
      </div>
    </div>
  );
}

export default Page;
