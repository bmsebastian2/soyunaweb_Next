import Image from "next/image";
import style from "./gestionRedesSociales.module.css";
import useScreenSize from "../../hook/useScreenSize";
import Ejemplos from "../../components/ejemplosWeb/Ejemplos";
import Ejemplos2 from "../../components/ejemplosWeb/Ejemplos2";

const GestionRedesSociales = () => {
  const { width } = useScreenSize();

  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <h4>
          <span>Gestionamos tus redes sociales</span> , desde las publicaciones
          orgánicas a los anuncios dirigidos
        </h4>
      </div>
      <div>
        <div className={style.containerCard}>
          {width < 600 && <div className={style.cardEspecial}></div>}
          {width < 600 && <div className={style.cardEspecial}></div>}

          <div className={style.card}>
            <Image
              src={"/GroupRedes.png"}
              width={90}
              height={90}
              alt="Redes sociales"
            />
            <h5>✔Publicaciones orgánicas</h5>
            <p>
              Programa o publica inmediatamente tus posts en Facebook, Instagram
              y Twitter.
            </p>
            <a href="http://">Más información</a>
          </div>

          <div className={style.card}>
            <Image
              src={"/Instagram.png"}
              width={80}
              height={80}
              alt="Logo instagram"
            />
            <h5>✔Anuncios en Instagram</h5>
            <p>
              Publicita tu marca para sumar seguidores y dirigirte a los
              visitantes del sitio.
            </p>
            <a href="http://">Más información</a>
          </div>

          <div className={style.card}>
            <Image
              src={"/Group 25.png"}
              width={80}
              height={80}
              alt="Logo instagram"
            />

            <h5>✔Anuncios en Google</h5>
            <p>Dirígete a los visitantes de tu web.</p>
            <a href="http://">Más información</a>
          </div>
        </div>
      </div>

      <div className={style.containerEjemplos}>
        <Ejemplos2 />
      </div>
      <div className={style.containerEjemplos}>
        <Ejemplos />
      </div>
      <div className={style.containerFooter}>
        <h4>Mantén la conversación activa en todos tus redes</h4>
        <p>
          Cuanto más aparezcas en redes sociales, más fácil le resultará a la
          gente conocerte. Te proporcionamos todo lo que necesitas para estar
          activo en las redes sociales y en cualquier otro lugar.💙
        </p>
      </div>
    </div>
  );
};

export default GestionRedesSociales;
