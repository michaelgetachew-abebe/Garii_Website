import React from "react";
import "./support.css";
import intuit from "../../assets/intuit.png";
import viawest from "../../assets/via.png";

const Support = () => {
  return (
    <section id="team" className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Our Supporters
        </h3>
      </div>

      <div className="secPartners container grid">
        <div className="singlePartner" data-aos="fade-right">
          <img src={intuit} alt="Partner 1" />
        </div>

        <div className="singlePartner" data-aos="fade-left">
          <img src={viawest} alt="Partner 2" />
        </div>
      </div>
    </section>
  );
};

export default Support;
