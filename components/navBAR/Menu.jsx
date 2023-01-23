import style from "./menu.module.css";

const Menu = () => {
  return (
    <div className={style.menu}>
      <ul className={style.listMenu}>
        <li>Inicio</li>
        <li>Acerca de Nosotros</li>
        <li>Servicios</li>
        <li>Galleria</li>
      </ul>
    </div>
  );
};

export default Menu;
