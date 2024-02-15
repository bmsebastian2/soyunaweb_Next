import style from "./listCard.module.css";
import CardProducto from "./CardProduct";

const ListCard = () => {
  return (
    <div className={style.container}>
      <CardProducto
        nameProduct={"Creación de sitio Web  LandPages"}
        precio={"25 US$/m"}
        img="./web.mp4"
        more={[
          "Diseño moderno.",
          "Responsive.",
          "Sitios indexados para Google.",
          "Inserción de Metadatos en las páginas del sitio.",
          "Registro de su dominio en la búsqueda orgánica de Google.",
          "Creación de Sitemap y envío a Google.",
          "Imágenes con dimensiones correctas para cada aplicación.",
        ]}
      />
      <div className={style.detailProductCard}>
        <h3>Te garantizamos:</h3>
        <hr />
        <p>
          <span>✔</span> <strong>Seguridad : </strong> Hosting y Dominio
          profesional gratis por un año. <span>SSD</span>
        </p>
        <p>
          <span>✔</span> <strong>Velocidad :</strong> Velocidad garatinzada.{" "}
          <span>SPEED PAGE</span>
        </p>
        <p>
          <span>✔</span> <strong>Buenas practicas : </strong> Posicionamiento.{" "}
          <span>SEO</span>
        </p>
        <hr />
        <small className={style.small}>
          <p>¡Cualquier duda, envíanos una pregunta! </p>
        </small>
        <div className={style.containerButton}>
          <button className={style.button}>WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
