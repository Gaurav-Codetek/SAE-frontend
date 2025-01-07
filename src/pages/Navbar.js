import React from "react";
import logo from "./Assets/WHITE LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import logoh from "./Assets/WHITE LOGO.png";
import icon from "./Assets/icon.png";
import icon1 from "./Assets/icon1.png";
import icon2 from "./Assets/icon2.png";
import icon3 from "./Assets/icon3.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const navopen = () => {
    const a = document.querySelector(".hamnav");
    a.classList.toggle("open");
  };
  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    const a = document.querySelector(".hamnav");
    a.classList.toggle("open");
  };
  function navigateToTeam() {
    nav("/team");
  }

  return (
    <>
      <div className="navbar">
        <ul>
          <li className="logo">
            <img src={logo} alt="logo" />
          </li>
          <li onClick={() => handleNavClick("homepage")}>Home</li>
          <li onClick={() => handleNavClick("services")}>Events</li>
          <li onClick={() => handleNavClick("feature")}>Benefits</li>
          <li onClick={() => handleNavClick("sponsor-page")}>Sponsors</li>
          <li onClick={() => handleNavClick("project")}>Gallery</li>
          <li onClick={() => handleNavClick("About-us")}>Contact</li>
          <li onClick={navigateToTeam}>Meet the team</li>

        </ul>
      </div>
      <div className="hamburger">
        <div className="mob-nav">
          <GiHamburgerMenu onClick={navopen} size="30" color="#96b2ee" />
          <div className="meet-the-team">
            <p onClick={navigateToTeam}>Meet the team</p>
          </div>
        </div>
        <div className="hamnav">
          <ul>
            <li onClick={() => handleNavClick("homepage")}>Home</li>
            <li onClick={() => handleNavClick("services")}>Events</li>
            <li onClick={() => handleNavClick("feature")}>Benefits</li>
            <li onClick={() => handleNavClick("sponsor-page")}>Sponsors</li>
            <li onClick={() => handleNavClick("project")}>Gallery</li>
            <li onClick={() => handleNavClick("About-us")}>Contact</li>
            <li onClick={navigateToTeam}>Meet the team</li>
          </ul>
          <div className="hamimg">
            <div className="hamlogo">
              <img src={logoh} />
            </div>
            <p>SAE UIET PU</p>
            <ul>
              <li>
                <a target="_blank" href="https://x.com/sae_uiet_pu">
                  <img src={icon1} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/sae-uiet-pu/"
                >
                  <img src={icon2} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/sae.uiet.pu?utm_source=qr&igsh=MXRzNzEyZGI3MTZocw=="
                >
                  <img src={icon3} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
