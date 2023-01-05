import LayaoutComponent from "../components/LayaoutComponent";
import HeadCustom from "../components/head/HeaderCustom";
import DiviGradiente from "../components/divisionGradiente/DivisionGradiente";
import DiviNegocio from "../components/divisionNegocio/DivisionNegocio";
export default function Home() {
  return (
    <LayaoutComponent
      content={"Servicio de diseño de páginas web. Diseño web."}
      title={"Diseño web | SoyunaWeb"}
    >
      <HeadCustom />
      <DiviGradiente />
      <DiviNegocio />
    </LayaoutComponent>
  );
}
