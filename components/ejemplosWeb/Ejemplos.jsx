import CardEjemplos from "./CardEjemplos";
import React from "react";

const Ejemplos = () => {
  return (
    <>
      <CardEjemplos
        add="/carrusel/SoyUnaWeb.webp"
        name="Soy una Web"
        url="https://soyunaweb.netlify.app/"
      />

      <CardEjemplos
        add="/carrusel/ProgresoSmall.webp"
        name="Progreso F.C"
        url="https://bmsebastian2.github.io/FCPROGRESO/"
      />
    </>
  );
};

export default Ejemplos;
