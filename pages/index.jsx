import LayaoutComponent from "../components/LayaoutComponent";
import HeadCustom from "../components/head/HeaderCustom";
import DiviGradiente from "../components/divisionGradiente/DivisionGradiente";
import DiviNegocio from "../components/divisionNegocio/DivisionNegocio";
import Division24Horas from "../components/division24horas/Division24Horas";
import ListCard from "../components/divisionCard/ListCard";
import GestionRedesSociales from "../components/divisionRedesSociales/GestionRedesSociales";

export default function Home() {
  return (
    <LayaoutComponent
      content={"Servicio de diseño de páginas web. Diseño web."}
      title={"Diseño web | SoyunaWeb"}
    >
      <HeadCustom />
      <ListCard />
      <DiviGradiente />
      <DiviNegocio />
      <Division24Horas />
      <GestionRedesSociales />
    </LayaoutComponent>
  );
}
