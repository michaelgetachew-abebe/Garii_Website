import React, { useEffect } from "react";
import "./main.css";
import mission from "../../assets/target.png";
import vision from "../../assets/shared-vision.png";
import value from "../../assets/value.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Mission Vission Values
        </h3>
      </div>

      <div className="secContent grid">
        <div data-aos="fade-up" className="vMv">
          <div className="imageDiv">
            <img src={mission} alt="vMv-icon" />
          </div>
          <div className="vmvDetail">
            <h4 className="vMvTitle">Mission</h4>
          </div>
          <div className="vmvDesc">
            <p>
              We bring our customers’ vision to life using innovative technology
              solutions, solving their business challenges and driving
              efficiencies.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="vMv">
          <div className="imageDiv">
            <img src={vision} alt="vMv-icon" />
          </div>
          <div className="vmvDetail">
            <h4 className="vMvTitle">Vision</h4>
          </div>
          <div className="vmvDesc">
            <p>
              Our vision is to harness the power of AI and blockchain technology
              to foster sustainable growth and help businesses in Ethiopia and
              Africa achieve their full potential.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="vMv">
          <div className="imageDiv">
            <img src={value} alt="vMv-icon" />
          </div>
          <div className="vmvDetail">
            <h4 className="vMvTitle">Values</h4>
          </div>
          <div className="vmvDesc">
            <p>
              Garii empowers our customers to prepare for what’s next by
              providing practical, real-world solutions which deliver
              personalized customer experiences today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
