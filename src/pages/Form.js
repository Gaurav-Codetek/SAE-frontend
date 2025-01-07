import React from "react";
import formimg from "./Assets/Home5-12-7.png.png";
import logo from "./Assets/WHITE LOGO.png";
// import logo from "./Assets/logo.png";
import icon from "./Assets/icon.png";
import icon1 from "./Assets/icon1.png";
import icon2 from "./Assets/icon2.png";
import icon3 from "./Assets/icon3.png";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const nav = useNavigate();
  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    const a = document.querySelector(".hamnav");
    a.classList.toggle("open");
  };
  function navigateToTeam() {
    nav('/team');
  }
  return (
    <>
      <div className="formsec">
        <div className="formlayout">
          <div className="formimg">
            <img src={formimg} />
          </div>
          <div className="form">
            <div className="formTItle">
              <h1>
                Ready to Work Together
                <span>In New Projects</span>
              </h1>
            </div>
            <div className="form">
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                ></textarea>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="footerLogoSec">
            <div className="footerLogo">
              <img src={logo} alt="SAE UIET PU logo" height={100} width={100} />
              <h3>SAE UIET PU</h3>
            </div>
            <div className="socialIcons">
              <img src={icon} alt="Facebook" />
              <img src={icon1} alt="instagram" />
              <img src={icon2} alt="linkedin" />
              <img src={icon3} alt="twitter" />
            </div>
          </div>
          <div className="footerList2">
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              SAE Teams
            </span>
            <ul>
              <li>Alpha One</li>
              <li>Garuda Motorsports</li>
              <li>Team Vayuveer</li>
              <li>Robotics Team</li>
              <li style={{cursor:"pointer"}} onClick={navigateToTeam}>Meet the team</li>
            </ul>
          </div>
          <div className="footerList4">
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              Quick Links
            </span>
            <ul>
              <li onClick={() => handleNavClick("homepage")}>Home</li>
              <li onClick={() => handleNavClick("services")}>Events</li>
              <li onClick={() => handleNavClick("feature")}>Benefits</li>
              <li onClick={() => handleNavClick("sponsor-page")}>Sponsors</li>
              <li onClick={() => handleNavClick("project")}>Gallery</li>
              <li onClick={() => handleNavClick("About-us")}>Contact</li>
            </ul>
          </div>
          <div className="footerList3">
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              Contact
            </span>
            <ul>
              <li>UIET Panjab University, Sector 25, Chandigarh</li>
              <li>contact@saeuietpu.in</li>
              <li>(+91) 99962 44995</li>
            </ul>
          </div>
        </div>
        <hr className="copyright" />
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#626262",
            padding: 0,
          }}
        >
          {" "}
          &#169; All copyrights reserved 2024
        </p>
      </footer>
    </>
  );
}
