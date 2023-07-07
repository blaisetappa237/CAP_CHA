import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="home-banner-container">
        <div></div>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            VOTRE SHAWARMA PREFERE
          </h1>
          <p className="primary-text">
          Bienvenue chez CAPITAINE SHAWARMA, 
          Votre destination pour déguster des shawarmas authentiques au Togo ! Notre équipe de chefs talentueux prépare des shawarmas succulents avec des ingrédients frais et de qualité. Nous vous offrons une expérience culinaire inoubliable avec un service client chaleureux.</p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
