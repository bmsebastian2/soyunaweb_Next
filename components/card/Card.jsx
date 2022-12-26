import style from "./card.module.css";
import Link from "next/link";

const Card = ({ titulo, parrafo }) => {
  return (
    <div className={style.container}>
      <Link href="#">
        <p className={style.parrafo}>Paso 1</p>
        <h4>{titulo}</h4>
        <p>{parrafo}</p>
      </Link>
    </div>
  );
};

export default Card;
