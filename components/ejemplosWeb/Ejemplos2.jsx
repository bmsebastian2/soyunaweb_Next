import CardEjemplos from "./CardEjemplos";
import React from "react";

const Ejemplos = () => {
  return (
    <>
      <CardEjemplos
        add="/carrusel/Baymanet.webp"
        name="Baymanet"
        url="http://baymanet.com/"
      />
      <CardEjemplos
        add="/carrusel/gamefootball.webp"
        name="Jugadores"
        url="https://sebastianbenitezq.netlify.app/"
      />
      <CardEjemplos
        add="/carrusel/YogaSmall.webp"
        name="YogaPraxMontevideo"
        url="https://yogapraxyzmontevideo.netlify.app/"
      />
    </>
  );
};

export default Ejemplos;
