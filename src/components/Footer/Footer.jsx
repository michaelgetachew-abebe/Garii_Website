import React, { useEffect } from "react";
import "./footer.css";
import footerBanner from "../../assets/banner-img2.png";
import { FiSend, FiChevronRight } from "react-icons/fi";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <seciton className="footer">
      <div className="overlay"></div>
      <div className="footerBannerDiv">
        <img src={footerBanner} alt="Footer Banner" />
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <em>KEEP IN TOUCH WITH US</em>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Email" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className="logo flex">
                Garii
              </a>
            </div>

            <div className="footerParagraph">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="smallText"
              >
                Cutting-Edge AI and Blockchain Solutions
              </span>
              <h1 data-aos="fade-up" className="homeTitle">
                Build Your Future With Us
              </h1>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="200"
              className="footerSocials flex"
            >
              <div className="icon-container">
                <AiFillTwitterSquare className="icon" />
              </div>
              <div className="icon-container">
                <AiFillYoutube className="icon" />
              </div>
              <div className="icon-container">
                <AiFillInstagram className="icon" />
              </div>
              <div className="icon-container">
                <AiFillLinkedin className="icon" />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="footerLinks grid"
          >
            <div className="linkGroup">
              <span className="groupTitle">OUR EXPERTISE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Web3 & Blockchain
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Machine Learning
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Cloud Computing
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Big Data Warehousing
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Data Analysis
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                API Integration
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">SERVICES & PRODUCTS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Authenticity
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Augmentation
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Automation
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Customer Experience
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Customized Solutions
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Product Improvement
              </li>
            </div>

            <div className="linkGroup pushUp">
              <span className="groupTitle">OUR SUPPORTERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Intuit
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Viawest
              </li>
            </div>
          </div>
        </div>
      </div>
    </seciton>
  );
};

export default Footer;