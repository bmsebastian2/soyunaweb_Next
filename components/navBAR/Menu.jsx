import style from "./menu.module.css";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={style.menu}>
      <ul className={style.listMenu}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/Acerca">Acerca de Nosotros</Link>
        </li>
        <li>
          <Link href="/Servicios">Servicios</Link>
        </li>
        <li>
          <Link href="/Prototipos">Prototipos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
