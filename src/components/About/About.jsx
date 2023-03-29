import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          About Us
        </h3>
      </div>

      <div className="secAbout container">
        <div className="aboutContent" data-aos="fade-left">
          <p>
            We, the founders of Garri, are highly skilled and experienced
            professionals in the fields of data science, data engineering, and
            web3 development. Through our successful careers in the global tech
            industry, we have gained a deep understanding of the latest
            technologies and trends in these areas, making our expertise a major
            asset for the company. Utilizing cutting-edge technology and
            data-driven solutions, we can lead the company to drive business
            growth and success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
