import Image from "next/image";
import React from "react";
import style from "./header.module.css";

const HeaderCustom = () => {
  return (
    <header className={style.header}>
      <div className={style.sobre}>
        <div className={style.left}></div>
        <div className={style.right}>
          
          <div className={style.menu} style={{ border: "3px solid black" }}>
            <ul className={style.listMenu}>
              <li>Inicio</li>
              <li>Acerca de Nosotros</li>
              <li>Servicios</li>
              <li>Galleria</li>
            </ul>
          </div>
          
          <div className={style.containerImagen}>
            <div className={style.containerHeroe}>
              <div className="">
                <Image src={"/Logo_M.png"} width={70} height={70} />
              </div>
              <div className="">
                {" "}
                <h4>Tenemos soluciones en</h4>{" "}
              </div>
              <div className="">
                <h1>Diseño Web</h1>
              </div>

              <div className="">
                <button>Contactanos</button>
              </div>
            </div>
            <div className={null} style={{ border: "1px solid red" }}>
              <Image src={"/Reunion.jpg"} width={550} height={550} />
            </div>
          </div>

          <div
            className={style.containerFooter}
            style={{ border: "1px solid red" }}
          >
            <div className="">4.1</div>
            <div className="">4.2</div>
            <div className="">4.3</div>
            <div className="">4.4</div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeaderCustom;
