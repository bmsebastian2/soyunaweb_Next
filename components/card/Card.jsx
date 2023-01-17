import style from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ titulo, parrafo, direccion, alt }) => {
  return (
    <div className={style.container}>
      <Link href="#">
        <p className={style.parrafo}></p>
        <Image src={direccion} width={65} height={65} alt={alt} />
        <h4>{titulo}</h4>
        <p>{parrafo}</p>
      </Link>
    </div>
  );
};

export default Card;
