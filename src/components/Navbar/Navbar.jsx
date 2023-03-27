import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle, AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const hideNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>Garii</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="NavLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="NavLink">
                About Us
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="NavLink">
                Services
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="NavLink">
                Team
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="NavLink">
                Contact
              </a>
            </li>
          </ul>

          <div onClick={hideNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <AiOutlineBars className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
