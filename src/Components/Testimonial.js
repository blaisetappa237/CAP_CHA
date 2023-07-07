import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
//import AboutBackground from "../Assets/about-background.png";
//import BannerBackground from "../Assets/home-banner-background.png";


const Testimonial = () => {
  return (
    <div id="comments">
      <div className="work-section-top">
        <p className="primary-subheading">Commentaires</p>
        <h1 className="primary-heading">Ce qu'ils pensent</h1>
        <p className="primary-text">
        Les avis de nos clients satisfaits comptent énormément.
        </p>
      </div>

      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Une expérience culinaire délicieuse à ne pas manquer !
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
