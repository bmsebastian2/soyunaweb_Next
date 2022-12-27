import Image from "next/image";
import React from "react";
import style from "./header.module.css";
import Card from "../card/Card";

const HeaderCustom = () => {
  return (
    <header className={style.header}>
      <div className={style.sobre}>
        <div className={style.left}></div>
        <div className={style.right}>
          <div className={style.menu}>
            <ul className={style.listMenu}>
              <li>Inicio</li>
              <li>Acerca de Nosotros</li>
              <li>Servicios</li>
              <li>Galleria</li>
            </ul>
          </div>

          <div className={style.containerImagen}>
            <div className={style.containerHeroe}>
              <div>
                <Image src={"/Logo_M.png"} width={65} height={65} />
              </div>
              <div>
                <div className="">
                  <h4>Tenemos soluciones en</h4>{" "}
                </div>
                <div className="">
                  <h1>
                    Sitios <br /> Web
                  </h1>
                </div>
              </div>

              <div>
                <button>Contactanos</button>
              </div>
            </div>
            <div className={null}>
              <Image src={"/GroupLogo.png"} width={950} height={950} />
            </div>
          </div>

          <div className={style.containerFooter}>
            <div className="">
              <Card
                titulo="Diseño Web"
                parrafo="Hoy en día todo tipo de negocio, empresa   y/o emprendimiento debe tener presencia digital."
              />
            </div>
            <div className="">
              <Card
                titulo="App Web"
                parrafo="Nuevas oportunidades de potenciar nuestro negocio por medio de las aplicaciones móviles."
              />
            </div>
            <div className="">
              <Card
                titulo="Marketing Digital"
                parrafo="Menos gastos y más resultados. Todas las acciones digitales son más económicas que las existentes."
              />
            </div>
            <div className="">
              <Image src={"/ball.svg"} width={185} height={185} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCustom;
