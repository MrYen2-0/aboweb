import './menu.css';
import Header from './componentes/Header';  

function Page() {
  const mission = "Cuidado y defensa de los intereses de nuestros clientes en materia del trabajo.";
  const values = "Profesionalismo, honradez, calidad en el servicio, lealtad.";
  const practiceAreas = `Áreas de práctica:
Defensa en juicios laborales
Defensa ante instancias superiores de los juicios laborales

Se cuantifica y asesora a los clientes en cuanto a la cuantía que corresponde en caso de un posible despido y realizar las gestiones para poder conciliar y evitar posibles desgastes dentro de un juicio laboral.
Se asesora desde el génesis de un juicio hasta la total culminación de este, pasando por todas las fases, dando seguimiento de manera oportuna y cuidando los intereses de nuestros clientes.`;

  const images = [
    "/images/oficinas12.jpg",
    "/images/oficinas13.jpg",
    "/images/oficinas14.jpg",
    "/images/oficinas18.jpg",
    "/images/oficinas10.jpg",
    "/images/oficinas15.jpg",
    "/images/oficinas16.jpg",
    "/images/oficinas17.jpg"
  ];

  return (
    <div className="Contenedor-global">
      <Header />
      <div className="contenedor-titulo">
        <div className="titulos">
          <div className="v1_22">Garcia & </div>
          <div className="v1_23">Caceres Gonzales</div>
        </div>
        <div className="titulo-edificio">
          <img src="/images/edificio11.jpg" className="titulo-edificio-imagen" alt="Edificio"/>
        </div>
      </div>
      <div className="contenedor">
        <div className="imagenes">
          {images.slice(0, 3).map((src, index) => (
            <img key={index} src={src} className="oficinas1" alt={`Oficina ${index + 1}`}/>
          ))}
          <div className="texto-info">
            <div className="info-titulo">Acerca de la empresa</div>
            <div className="info-descripcion">
              Desde el año 2004, la empresa se crea con la finalidad de 
              prestar servicios profesionales de alta calidad 
              para los clientes, donde desde esa fecha a la actualidad 
              se cuenta con clientes satisfechos con los servicios prestados 
              en materia del trabajo.
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-resumen">
        <div className="resumen-info">
          <h2>Misión y Valores:</h2>
        <div className="texto-oficina"> <a>Misión de la empresa: {mission}
         Valores fundamentales de la empresa: {values}
      {practiceAreas}</a>
            </div>
        </div>
        <div className="contenedor-edificios">
        <div className="imagenes-edificio">
          {images.slice(3, 5).map((src, index) => (
            <img key={index} src={src} className="edificio" alt={`Edificio ${index + 1}`}/>
          ))}
        </div>
        <div className="imagenes-edificio2">
          {images.slice(5).map((src, index) => (
            <img key={index} src={src} className="edificio-3" alt={`Edificio ${index + 1}`}/>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
