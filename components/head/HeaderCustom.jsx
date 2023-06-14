import Image from "next/image";
import React from "react";
import style from "./header.module.css";
import Card from "../card/Card";
import Menu from "../navBAR/Menu";

const HeaderCustom = () => {
  return (
    <header className={style.header}>
      <div className={style.sobre}>
        <div className={style.left}></div>
        <div className={style.right}>
          <Menu />

          <div className={style.containerImagen}>
            <div className={style.containerHeroe}>
              <div>
                <Image
                  src={"/Logo_M.png"}
                  width={65}
                  height={65}
                  alt="Logo web"
                />
              </div>
              <div>
                <div>
                  <h4>😎 Nosotros creamos:</h4>
                </div>
                <div>
                  <h1>
                    Sitios <br /> Web
                  </h1>

                  <h3>🏳con diseño</h3>
                </div>
              </div>

              <div>
                <button>Contactanos</button>
              </div>
            </div>
            <div className={null}>
              <Image
                src={"/GroupLogoW.webp"}
                width={950}
                height={950}
                alt="Grupo Diseño web "
                priority
              />
            </div>
          </div>

          <div className={style.containerFooter}>
            <div>
              <Card
                titulo="Diseño Web"
                parrafo="Hoy en día todo tipo de negocio, empresa   y/o emprendimiento debe tener presencia digital."
                direccion="/Marketing.svg"
                alt="Logo marketing"
              />
            </div>
            <div>
              <Card
                titulo="App Web"
                parrafo="Nuevas oportunidades de potenciar nuestro negocio por medio de las aplicaciones móviles."
                direccion="/Ruleman.svg"
                alt="Logo App web"
              />
            </div>
            <div>
              <Card
                titulo="Marketing Digital"
                parrafo="Menos gastos y más resultados. Todas las acciones digitales son más económicas que las existentes."
                direccion="/www1.svg"
                alt="Logo Logo marketing"
              />
            </div>
            <div className={style.containerAnimationPuntos}>
              <Image
                src={"/ball.svg"}
                width={185}
                height={185}
                alt="Animacion"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCustom;
