import Image from "next/image";
import style from "./gestionRedesSociales.module.css";

const GestionRedesSociales = () => {
  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <h4>
          <span>Gestionamos tus redes sociales</span> , desde las publicaciones
          orgánicas a los anuncios dirigidos
        </h4>
      </div>
      <div className={style.containerCard}>
        <div className={style.card}>
          <Image
            src={"/organicas.png"}
            width={120}
            height={120}
            alt="Redes sociales"
          />
          <h5>Publicaciones orgánicas</h5>
          <p>
            Programa o publica inmediatamente tus posts en Facebook, Instagram y
            Twitter.
          </p>
          <a href="http://">Más información</a>
        </div>

        <div className={style.card}>
          <Image
            src={"/instagram.gif"}
            width={120}
            height={120}
            alt="Logo instagram"
          />
          <h5>Anuncios en Instagram </h5>
          <p>
            Publicita tu marca para sumar seguidores y dirigirte a los
            visitantes del sitio.
          </p>
          <a href="http://">Más información</a>
        </div>

        <div className={style.card}>
          <Image
            src={"/google.gif"}
            width={120}
            height={120}
            alt="Logo instagram"
          />

          <h5>Anuncios en Google</h5>
          <p>Dirígete a los visitantes de tu web.</p>
          <a href="http://">Más información</a>
        </div>
      </div>
      <div className={style.containerFooter}>
        <h4>Mantén la conversación activa en todos tus redes</h4>
        <p>
          Cuanto más aparezcas en redes sociales, más fácil le resultará a la
          gente conocerte. Te proporcionamos todo lo que necesitas para estar
          activo en las redes sociales y en cualquier otro lugar.
        </p>
      </div>
    </div>
  );
};

export default GestionRedesSociales;
