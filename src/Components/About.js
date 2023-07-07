import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about">
      <div className="home-banner-container">
        <div></div>
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">
            A propos de nous
          </h1>
          <p className="primary-text">
            Notre équipe dévouée est là pour rendre votre expérience de shawarma au Togo exceptionnelle. Leur expertise et leur convivialité vous guident dans le choix parfait. Chaque membre de notre équipe est formé pour offrir un service chaleureux et professionnel. Rencontrez-nous et laissez-nous vous servir avec passion et enthousiasme.
          </p>
        </div>
        <div className="about-buttons-container">
          <a href="https://www.tiktok.com/@tokoss_shawarma/video/7241583327797316869?is_from_webapp=1&sender_device=pc&web_id=7197522591919097350" className="watch-video-button">
            <BsFillPlayCircleFill /> Regardez la vidéo
          </a>
        </div>

      </div>
    </div>
  );
};

/*<center>
      <div className="about-buttons-container">
        <button className="watch-video-button">
          <BsFillPlayCircleFill /> Regardez la vidéo
        </button>
      </div>
      </center>*/





export default About;
