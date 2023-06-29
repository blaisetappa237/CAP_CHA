import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ReactModal from 'react-modal';


function App() {
  const [showButton, setShowButton] = useState(false);

  // Fonction pour le bouton Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Fonction pour l'event Top
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  ReactModal.setAppElement('#root');
  // Attach scroll event listener to the window
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
{showButton && (
  <button className="scroll-top-button" onClick={scrollToTop}>
    <FontAwesomeIcon icon={faChevronUp} />
  </button>
)}

      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

