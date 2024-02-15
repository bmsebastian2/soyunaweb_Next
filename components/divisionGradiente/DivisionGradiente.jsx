import style from "./gradiente.module.css";
import Image from "next/image";

const DivisionGradiente = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <p>
          “<span>90% </span> de nosotros buscamos información de un producto o
          servicio en <strong>Internet</strong> ”
          <Image
            className={style.imagen}
            src={"/New-Product4W.png"}
            width={220}
            height={220}
            alt="Sitios web"
          />
        </p>
      </div>
    </div>
  );
};

export default DivisionGradiente;
