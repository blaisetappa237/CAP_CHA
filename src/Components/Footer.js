import React from "react";
import Logo from "../Assets/Logo.svg";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import RoomIcon from '@mui/icons-material/Room';
import QrCodeImage from "../Assets/QRCode.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-two">
        <div className="footer-qr-code">
          <img src={QrCodeImage} alt="QR Code" />
        </div>
      </div>
      <div className="footer-section-middle">
        <div className="message-container">
          <h3>OU</h3>
        </div>
      </div>
      <div className="footer-section-one">
        <center>
          <div className="footer-icons">
            <a href="https://wa.me/+22893497713">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@tokoss_shawarma?_t=8dNazjvPJYM&_r=1">
              <SiTiktok />
            </a>
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
          </div>
          <p></p>
          <p className="footer-message">CONTACTEZ NOUS ICI !</p>
        </center>
      </div>
    </div>
  );
};


export default Footer;
