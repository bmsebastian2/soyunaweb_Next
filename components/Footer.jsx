import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <div className="">
          <Image
            className=" aniStart  setVisible"
            loading="lazy"
            src="/favicon/LogoSoyUnaWeb32X32.ico"
            alt=""
            width={25}
            height={25}
          />
          <h3 className=" aniStart  setVisible">SoyunaWeb.com</h3>
        </div>
        <div className=" aniStart  setVisible">
          <ul>
            <li>
              <Link href="#">Inicio</Link>
            </li>
            <li>
              <a className="dropdown-arrow" href="#">
                Servicios
              </a>
            </li>
            <li>
              <Link href="#">Acerca de Nosotros</Link>
            </li>
            <li>
              <Link href="#">Contactanos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer2">
        <div className="">
          <h5 className=" aniStart  setVisible">Mantente en contacto:</h5>
        </div>
        <div className="">
          <div className="footerRedes">
            <Link
              href="tel:+598 93 308 288"
              target="_blank"
              title="Whatsapp"
              // onClick="window.open('https://api.whatsapp.com/send?phone=59899521989&text=Hola%20Quiero%20más%20a%20información%20de%20%20para%20crear%20mi%20Web.');"
              rel="noreferrer"
            >
              <div className="bg-whatsapp_icon darkIcon_icon sombra-movil animation2"></div>
            </Link>
            <Link
              href="mailto: yogacumana@hotmail.com"
              target="_blank"
              title="LLamar"
              rel="noreferrer"
            >
              <div className="bg-phone_icon darkIcon_icon sombra-movil animation2"></div>
            </Link>
            <Link
              href="tel:+598 93 308 288"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="bg-email_icon darkIcon_icon sombra-movil animation2"
                title="Envíar correo"
              ></div>
            </Link>
          </div>
        </div>
        <div className="">
          <p>SoyunaWeb ©.Todos los drerechos Reservados.</p>
        </div>
        <div>
          <p className="attribution">
            Challenge by{" "}
            <Link href="#" target="_blank">
              SoyUnaWeb
            </Link>
            . Coded by <Link href="#">Sebastian Benitez</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
