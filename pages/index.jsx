import LayaoutComponent from "../components/LayaoutComponent";
import HeadCustom from "../components/head/HeaderCustom";
export default function Home() {
  return (
    <LayaoutComponent
      content={"Servicio de diseño de páginas web. Diseño web."}
      title={"Diseño web | SoyunaWeb"}
    >
      <HeadCustom />
      <div style={{ minHeight: "100vh", border: "1px solid red" }}>
        <p>adsd</p>
      </div>
    </LayaoutComponent>
  );
}
