import style from "./menu.module.css";
import Link from "next/link";

const Menu = ({ children }) => {
  return (
    <div className={style.menu}>
      <div>{children}</div>
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
