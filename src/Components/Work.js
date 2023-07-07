import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import BannerBackground from "../Assets/home-banner-background.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Choisissez votre viande",
      text: "Poulet tendre, bœuf juteux, nos shawarmas combleront vos papilles.",
    },
    {
      image: ChooseMeals,
      title: "Personnalisez votre shawarma",
      text: "Composez votre shawarma parfait avec nos ingrédients frais et savoureux. Personnalisez selon vos goûts. ",
    },
    {
      image: DeliveryMeals,
      title: "Faites vous livrer",
      text: "Commandez en ligne, savourez votre shawarma sans sortir. Service fiable et rapide.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <center>
        <h1 className="primary-heading">Comment nous procédons ?</h1>
        </center>
        <p className="primary-text">
            Que vous soyez sur place ou chez vous, votre satisfaction est notre priorité !   
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
