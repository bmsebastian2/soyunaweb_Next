import style from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ titulo, parrafo }) => {
  return (
    <div className={style.container}>
      <Link href="#">
        <p className={style.parrafo}>Paso 1</p>
        <Image src={"/Marketing.svg"} width={65} height={65} />
        <h4>{titulo}</h4>
        <p>{parrafo}</p>
      </Link>
    </div>
  );
};

export default Card;
