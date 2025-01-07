import React from "react";
import "./Sponsor.css";
import GAMMA from "./Assets/GAMMA.jpg";
import ANSysLogo from "./Assets/ANSys.png";
import DICLogo from "./Assets/dic.jpg";
import EmmLogo from "./Assets/emm.png";
import InfiLeagueLogo from "./Assets/infileague.jpg";
import AmecLogo from "./Assets/mec.jpg";
import UietLogo from "./Assets/Uiet.jpeg";
import MSMELogo from "./Assets/msmeBhopal.jpg";
import SimLogo from "./Assets/sim.png";
import SolidworksLogo from "./Assets/SOLID.png";
import TrubaLogo from "./Assets/truba.jpg";
import UXLogo from "./Assets/ux.jpg";

const sponsors = [
  { img: ANSysLogo, name: "ANSYS" },
  { img: DICLogo, name: "DESIGN AND INNOVATION CENTRES" },
  { img: EmmLogo, name: "EMM BROS" },
  { img: InfiLeagueLogo, name: "INFI LEAGUE" },
  { img: AmecLogo, name: "AMEC MOBILITY" },
  { img: UietLogo, name: "UTECHNOS" },
  { img: MSMELogo, name: "MSME BHOPAL" },
  { img: SimLogo, name: "SIMSCALE" },
  { img: SolidworksLogo, name: "SOLIDWORKS" },
  { img: TrubaLogo, name: "TRUBA" },
  { img: UietLogo, name: "UIET" },
  { img: UXLogo, name: "RETHINK" },
];

const SponsorPage = () => {
  return (
    <div className="Sponsor-container">
      <div className="sponsor-heading">
        <h1>Our Sponsors</h1>
      </div>
      <div className="sponsors-logo">
        <ul>
          <li>
            <img src={GAMMA} alt={`GAMMA TECHNOLOGIES Logo`} />
            <p>GAMMA TECHNOLOGIES</p>
          </li>
        </ul>
      </div>
      <div className="sponsors-logo">
        <ul>
          {sponsors.map((sponsor, index) => (
            <li key={index}>
              <img src={sponsor.img} alt={`${sponsor.name} Logo`} />
              <p>{sponsor.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SponsorPage;
