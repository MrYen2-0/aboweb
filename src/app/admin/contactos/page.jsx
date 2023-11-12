import '../contactos/contacto.css';
import Headeradmin from '../componentes/Headeradmin';

function Page() {
  // Datos de ejemplo de los usuarios
  const users = [
    { name: 'Juan Pérez', email: 'juan.perez@gmail.com', phone: '1234567890' },
    { name: 'Ana Sánchez', email: 'ana.sanchez@gmail.com', phone: '0987654321' },
    // Agrega más usuarios aquí
  ];

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
          <form>
            <label htmlFor="busqueda">Buscar por nombre, email o teléfono:</label>
            <input type="text" id="busqueda" name="busqueda" />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <div className="contenedor-usuarios">
          {users.map((user, index) => (
            <div key={index} className="usuario">
              <div>Nombre: {user.name}</div>
              <div>Email: {user.email}</div>
              <div>Teléfono: {user.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
