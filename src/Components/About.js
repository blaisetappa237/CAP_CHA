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
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
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
