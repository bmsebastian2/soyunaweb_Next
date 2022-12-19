import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="">
            <Image
              className=" aniStart  setVisible"
              loading="lazy"
              src="/img/LogoSoyUnaWeb32X32.png"
              alt=""
            />
            <h3 className=" aniStart  setVisible">SoyunaWeb.com</h3>
          </div>
          <div className=" aniStart  setVisible">
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a className="dropdown-arrow" href="#">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#">Acerca de Nosotros</a>
              </li>
              <li>
                <a href="#">Contactanos</a>
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
              <a
                href="tel:+598 93 308 288"
                target="_blank"
                title="Whatsapp"
                onClick="window.open('https://api.whatsapp.com/send?phone=59899521989&text=Hola%20Quiero%20más%20a%20información%20de%20%20para%20crear%20mi%20Web.');"
                rel="noreferrer"
              >
                <div className="bg-whatsapp_icon darkIcon_icon sombra-movil animation2"></div>
              </a>
              <a
                href="mailto: yogacumana@hotmail.com"
                target="_blank"
                title="LLamar"
                rel="noreferrer"
              >
                <div className="bg-phone_icon darkIcon_icon sombra-movil animation2"></div>
              </a>
              <a
                href="tel:+598 93 308 288"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="bg-email_icon darkIcon_icon sombra-movil animation2"
                  title="Envíar correo"
                ></div>
              </a>
            </div>
          </div>
          <div className="">
            <p>SoyunaWeb ©.Todos los drerechos Reservados.</p>
          </div>
          <div>
            <p className="attribution">
              Challenge by{" "}
              <a href="#" target="_blank">
                SoyUnaWeb
              </a>
              . Coded by <a href="#">Sebastian Benitez</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
