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
          src={"/images/myBlur3.jpg"}
          width={400}
          height={400}
        />
        <Image
          className={style.imagen2}
          src={"/images/myBlur3.jpg"}
          width={600}
          height={600}
        />
      </div>
      <div className={style.imagen}></div>
    </div>
  );
};

export default DivisionNegocio;
