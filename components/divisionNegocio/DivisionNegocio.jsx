import style from "./divisionnegocio.module.css";
import Image from "next/image";

const DivisionNegocio = () => {
  return (
    <div className={style.container}>
      <div className={style.texto}>
        <div>
          <p>
            Con un sitio web profesional y fácil de usar, los consumidores
            consideraran <span>tu negocio creíble</span>
          </p>
        </div>
        <div>
          <h4>WEB</h4>
        </div>
        <Image
          className={style.imagen}
          src={"/images/myBlur3W1.webp"}
          width={150}
          height={150}
          alt="Fondo"
        />
        <Image
          className={style.imagen2}
          src={"/images/myBlur3W1.webp"}
          width={300}
          height={300}
          alt="Fondo"
        />
        <Image
          className={style.imagen4}
          src={"/images/myBlur3W1.webp"}
          width={150}
          height={150}
          alt="Fondo"
        />
      </div>
      <div className={style.containerImagen}>
        <Image
          className={style.imagen3}
          src={"/webW.png"}
          width={900}
          height={900}
          alt="Fondo"
        />
      </div>
    </div>
  );
};

export default DivisionNegocio;
