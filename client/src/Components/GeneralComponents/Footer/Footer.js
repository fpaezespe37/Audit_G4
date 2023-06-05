import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import Logo from "../../../Assets/logo.jpg";

export function Footer() {
  return (
    <div>
      <footer className="footerM">
        <div className="footer1 container-fluid ">
          <div className="row">
            <div className="col py-2">
              <p className="footer-p px-5 m-5">
                <img src={Logo} height={120} width={150} alt="logo"></img>
              </p>
            </div>
            <div className="col py-1">
              <div className="socialmedia-text  p-1 row">
                <p className="footer-p p-2 ">
                  Encuentranos también en nuestras redes sociales:
                </p>
              </div>
              <div className="socialmedia  p-1 row">
                <div className="col p-1 twitter d-flex  justify-content-center">
                  <a
                    href="https://www.facebook.com/ecuabonsai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="display-4" icon={faFacebook} />
                  </a>
                </div>
                <div className="col p-1 youtube d-flex justify-content-center">
                  <a
                    href="https://www.instagram.com/ecuabonsai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="display-4" icon={faInstagram} />
                  </a>
                </div>
                <div className="col p-1 github d-flex justify-content-center">
                  <a
                    href="https://www.tiktok.com/@ecuabonsai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="display-4" icon={faTiktok} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <p className="footer-p px-5 m-5">
                Número de Telefono
                <p className="text-feet"> 09989373707</p>
                Horario de Atención <br />
                <p className="text-feet">Lunes a Sabado 8am a 5pm </p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </footer>
      Copyright © 2023 | Ecuabonsai
    </div>
  );
}

export default Footer;
