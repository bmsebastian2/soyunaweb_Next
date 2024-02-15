import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={style.containerMain}>
      <div className={style.container}>
        <div className={(style.div, style.div1)}>
          <h4>
            <strong>NOSOTROS</strong>
          </h4>
          <hr />
          <p>
            Creamos un sitio web moderno y atractivo para tu empresa de
            tecnología. Si buscas un diseño limpio y funcional que refleje la
            identidad de la marca. Interfaz fácil de usar, optimización para
            dispositivos móviles y velocidad de carga rápida.
          </p>
        </div>
        <div className={(style.div, style.div2)}>
          <div>
            <Image src={"/Logo_M.png"} width={60} height={60} alt="Logo web" />
          </div>
        </div>
        <div className={(style.div, style.div3)}>
          <h4>
            <strong>ENLACES</strong>
          </h4>
          <hr />
          <ul>
            <li>Acerca de Nosotros</li>
            <li>Servicios</li>
            <li>Prototipos</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={style.redes}>
        <div>
          <small>Copyright © 2017 All Rights Reserved by Scanfcode.</small>
        </div>
        <div>😎</div>
      </div>
    </div>
  );
};

export default Footer;
