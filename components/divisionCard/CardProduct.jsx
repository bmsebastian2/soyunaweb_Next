import { useRef } from "react";
import CardPlus from "./mediaCardProducts/add-to-cart.png";
import Plus from "./mediaCardProducts/plus1.png";
import Menos from "./mediaCardProducts/menos.png";
import Image from "next/image";
const CardProducto = ({ nameProduct, precio, img, more }) => {
  const bottom = useRef(null);
  return (
    <div className="wrapper">
      <div className="container">
        <div className="top">
          <video autoPlay muted loop playsInline style={{ width: "16rem" }}>
            <source src={img} type="video/mp4" />
            Tu navegador no es compatible con video HTML5
          </video>
        </div>
        <div className="bottom" ref={bottom}>
          <div className="left">
            <div className="details">
              <p>
                <strong> {nameProduct}</strong>
              </p>
              <hr />
              <p>Desde: {precio}</p>
            </div>
            <div
              className="buy"
              onClick={() => bottom.current.classList.add("clicked")}
            >
              <i className="containerPlus">
                <Image
                  src={CardPlus}
                  width={50}
                  height={50}
                  alt="Agregar al carrito"
                />
              </i>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i className="containerPlus">
                <Image src={Plus} width={50} height={50} alt="Icono plus" />
              </i>
            </div>
            <div className="details">
              <p>
                {" "}
                <strong>{nameProduct}</strong>{" "}
              </p>
              <p>Agregado a su carro</p>
            </div>
            <div
              className="remove"
              onClick={() => bottom.current.classList.remove("clicked")}
            >
              <i className="containerPlus">
                <Image src={Menos} width={50} height={50} alt="Icono menos" />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">
            {" "}
            <strong>Más</strong>{" "}
          </i>
        </div>
        <div className="contents">
          <h4>
            ¿Siempre ha querido crear un sitio web profesional para su empresa?
          </h4>
          <hr />

          <ul>
            {more.map((e, index) => (
              <li key={index}>▫ {e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
