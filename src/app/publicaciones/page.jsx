import './publicacion.css';
import Link from 'next/link';

function Page() {
  return (
    <div>
      <div className="Contenedor-global">
      <div className="contenedor-header">
  <div className="v1_161"></div>
  <Link href="/">
  <div className="menu-item">Menu</div>
  </Link>
  <Link href="/galeria">
  <div className="menu-item">Galeria</div>
</Link>
<Link href="/abogados">
  <div className="menu-item">Abogados</div>
  </Link>
  <div className="menu-item">Publicaciones</div>
  <div className="menu-item">Contactos</div>
  <div className="icono"></div>
  <div className="imagen"></div>
</div>
<div className="contenedor-titulo">
  <div className="titulos">
    <div className="v1_22">Garcia & </div>
    <div className="v1_23">Caceres Gonzales</div>
  </div>
  <div className="v1_24"></div>
</div>
        <div className="contenedor-info">
          <div className="imagenes-info">
          <div className="v1_56"></div>
          <div className="v1_57"></div>
          <div className="v1_58"></div>
          </div>
          <div className="texto-info">
          <div className="v1_55">Acerca de la empresa</div>
          <div className="v1_64">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...Lorem Ipsum is simply dummy text of the printing and typesetting
          industry... 
        </div>
        <div className="v1_61">
              <div className="v1_62">Leer mas</div>
          </div>
        </div>
      </div>
      <div className="v1_73">
        <div className="v1_79">Edificio</div>
        <div className="texto-oficina">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...Lorem Ipsum is simply dummy text of the printing and typesetting
          industry... Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
          </div>
        <div className="v1_80"></div>
        <div className="v1_81"></div>
        <div className="v1_82">
          <div className="v1_83">
            <div className="v1_84">
              <div className="v1_85">Mas</div>
              <div className="name"></div>
            </div>
            <div className="v1_87">Oficinas
            </div>
          </div>
        </div>
        <div className="v1_88"></div>
        <div className="v1_89"></div>
        <div className="v1_90"></div>
        <div className="v1_91"></div>
        <div className="v1_92"></div>
        <div className="v1_93"></div>
        <div className="v1_94"></div>
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
