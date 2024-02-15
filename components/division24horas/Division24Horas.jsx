import style from "./division.module.css";
import Image from "next/image";

const Division24Horas = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <p>
          Disponibilidad de ver tus productos o servicios las
          <span> 24 horas</span>
          <Image
            className={style.imagen}
            src={"/Tiny247.png"}
            width={220}
            height={220}
            alt="Sitios web"
          />
        </p>
      </div>
    </div>
  );
};

export default Division24Horas;
