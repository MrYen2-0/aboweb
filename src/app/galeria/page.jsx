import '../galeria/galeria.css';
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
    <div className="v1_22">Edificio & </div>
    <div className="v1_23">Oficinas</div>
  </div>
</div>
        <div className="contenedor-edificios-oficinas">
        <div class="imagenes-info">
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
    <div class="imagenes-oficinas"></div>
</div>    
</div>
    </div>
      </div>
  );
}

export default Page;
