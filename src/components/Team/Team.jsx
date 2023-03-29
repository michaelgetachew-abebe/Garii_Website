import React from "react";
import "./team.css";

import man from "../../assets/man2.jpg";
import woman from "../../assets/woman2.jpg";

const Team = () => {
  return (
    <section id="team" className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Our Team
        </h3>

        <div className="secTeamMember container grid">
          <div className="singleItem" data-aos="fade-up">
            <img src={man} alt="Team Member-1" />
            <h3>Abebe Bikila</h3>
            <p>CTO</p>
          </div>

          <div className="singleItem" data-aos="fade-up" data-aos-delay="400">
            <img src={woman} alt="Team Member-1" />
            <h3>Derartu Tullu</h3>
            <p>Marketing Manager</p>
          </div>

          <div className="singleItem" data-aos="fade-up" data-aos-delay="800">
            <img src={man} alt="Team Member-1" />
            <h3>Challa Gemeda</h3>
            <p>Senior Developer</p>
          </div>

          <div className="singleItem" data-aos="fade-up" data-aos-delay="1200">
            <img src={man} alt="Team Member-1" />
            <h3>Mamo Welde</h3>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
