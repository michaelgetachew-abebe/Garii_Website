import React, { useEffect } from "react";
import "./home.css";
import banner from "../../assets/banner-img2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="#" className="home">
      <div className="overlay"></div>
      <img className="banner-img" src={banner} alt="banner-img" />
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Cutting-Edge AI and Blockchain Solutions
          </span>
          <h2 data-aos="fade-up" className="homeTitle">
            Build Your Future With Us
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
