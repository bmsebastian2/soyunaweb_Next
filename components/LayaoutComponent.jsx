/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Footer from "./Footer";
const LayaoutComponent = ({ children, title, content }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={content} />
        <meta name="keywords" content="web diseño, página web, sitio web" />
        <meta name="author" content="Sebastian Benitez/" />
        <meta name="copyright" content="SoyunaWeb" />
        <meta name="robots" content="index, follow" />

        <link rel="shortcut icon" href="/favicon/LogoSoyUnaWeb32X32.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css"
        />
        <title>{title}</title>
      </Head>

      <main>{children}</main>
      {
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script>
      }
      <Footer></Footer>
    </>
  );
};

export default LayaoutComponent;
