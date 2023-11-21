import '../publicaciones/publicacion.css';
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
    <div className="v1_22">Nuestras </div>
    <div className="v1_23">firmas</div>
  </div>
</div>
        <div className="contenedor-firmas">
          <div className="imagenes-firmas">
          <div className="v1_56">
          <div className="texto-firmas">
              <div className="titulo-firmas">
              Jose N. Grupo Pepsico              
              </div>
              <div className="descripcion-firmas">
              Trabajador demanda despido injustificado y 
              se acredita en el juicio ante el juez que 
              el renunció voluntariamente y no condenaron
               a la empresa, ya que se exhibió la 
               renuncia escrita con huella y firma y su 
               finiquito correspondiente.
              </div>
            </div>
            <img src="/images/oficinas2.jpg" className="imagen-firmas"/>
          </div>
          <div className="v1_56">
          <div className="texto-firmas">
              <div className="titulo-firmas">
               Benjamin N vs Cristasur, S A de CV
              </div>
              <div className="descripcion-firmas">
              Trabajador que demanda un riesgo de trabajo, 
              alegando que perdió la vista de un ojo por un 
              accidente que sufrió en la empresa, con las pruebas
               que se ofrecieron se acreditó que la pedida de la 
               vista no fue derivado del accidente que dijo tener, 
               sino que perdió la vista por una mala atención a su 
               Diabetes y generó que perdiera la vista, ya se
                ofreció la pericial médica y arrojó al final que no
                 se condenará a la empresa.
              </div>
            </div>
            <img src="/images/oficinas2.jpg" className="imagen-firmas"/>

          </div>
          <div className="v1_56">
          <div className="texto-firmas">
              <div className="titulo-firmas">
              Rubén N vs Tony tiendas               
              </div>
              <div className="descripcion-firmas">
              Trabajador argumenta ser despedido en una fecha
               y la empresa se defiende diciendo que el trabajador 
               abandonó el empleo Porque ya estaba trabajando para 
               otra empresa y se acreditó con informes al IMSS y 
               se logró que no se condenara a la empresa.
              </div>
            </div>
            <img src="/images/oficinas2.jpg" className="imagen-firmas"/>
          </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
