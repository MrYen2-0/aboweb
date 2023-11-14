import '../abogados/abogado.css';
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
    <div className="titulo3">Abogados </div>
    <div className="titulo4">De la firma</div>
  </div>
</div>
        <div className="contenedor-abogados">
          <div className="imagenes-abogados">
          <div className="cuadros-abogados">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Juan Carlos Garcia Perez 
              </div>
              <div className="descripcion-abogado">
              Licenciado en derecho, maestría en derechos humanos y amparo, 
              maestría en derecho de empresas, 
              doctorado en derechos humanos. 
              Miembro numerario de la Academia Mexicana del Derecho del Trabajo y de la Previsión Social, 
              capítulo Chiapas, miembro de la Academia Mexicana del Derecho Procesal del Trabajo, capítulo Chiapas.
              </div>
            </div>
            <div className="imagen-abogado">
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA: Defensa de area empresarial 
            </div>
          </div>
          <div className="cuadros-abogados">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Martín Oswaldo Flores Vázquez
              </div>
              <div className="descripcion-abogado">
              Licenciado en derecho, maestro en derechos humanos y amparo, 
              doctorado en derechos humanos.
               Miembro numerario de la Sociedad Legal Internacional "J. Reuben Clark".
              </div>
            </div>
            <div className="imagen-abogado">
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA:   Defensa del área empresarial
            </div>
          </div>
          <div className="cuadros-abogados">
          <div className="texto-abogado">
              <div className="titulo-abogado">
              Jimmy Alexander Castillejos Alfonzo
              </div>
              <div className="descripcion-abogado">
              Licenciado en derecho y Maestrante en derechos humanos y amparo.
              </div>
            </div>
            <div className="imagen-abogado">
            </div>
            <div className="areas-abogado">
            ÁREAS DE PRÁCTICA:   Defensa del área laboral trabajadora.
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
