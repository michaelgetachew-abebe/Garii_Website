import React from "react";
import customer from "../../assets/customerexperience.png";
import customized from "../../assets/customizedsolutions.png";
import product from "../../assets/productivityImprovement.png";
import "./services.css";

const Services = () => {
  return (
    <section id="services" className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Services
        </h3>

        <div className="secServiceContainer container grid">
          <div className="singleService" data-aos="fade-up">
            <img src={customer} alt="Service 1" />
            <h3>Customer Experience</h3>
            <p>
              We bring our customers' visions to life by solving business
              objectives with cutting edge technologies, innovations and modern
              efficiencies.
            </p>
          </div>

          <div
            className="singleService"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={customized} alt="Service 2" />
            <h3>Customized Solutions</h3>
            <p>
              We help Enterprises embrace modern digital transformation with
              solutions tailored to their needs, able to scale as their business
              requires.
            </p>
          </div>

          <div
            className="singleService"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img src={product} alt="Service 3" />
            <h3>Productivity Improvement</h3>
            <p>
              We empower users to become &ldquo;great&rdquo; through modern
              collaboration practices and tools, which optimize workflows while
              reducing associated time and cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
