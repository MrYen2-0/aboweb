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
    { label: 'Numero de telefono:', type: 'tel', id: 'telefono' },
    { label: 'Titulo de la cita:', type: 'text', id: 'titulo' },
  ];

  return (
    <div className="Contenedor-global">
      <Header />
      <div className="contenedor-titulo14">
        <div className="titulos-contacto">
          <div className="titulo12">Informacion de </div>
          <div className="titulo13">Contacto</div>
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
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.1415529871061!2d-93.12787318281201!3d16.756434783190926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8fa8181f8d9%3A0xe9f47aae7a693d09!2sIMI%20Civiles%20del%20Sur!5e0!3m2!1ses-419!2smx!4v1700609126431!5m2!1ses-419!2smx" 
        className="mapa-incrustado"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>

      </div>
    </div>
  );
}

export default Page;
