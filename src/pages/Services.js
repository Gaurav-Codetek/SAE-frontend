import React from "react";
import Img from "./Assets/baja-logo-removebg-preview.png";
import img1 from "./Assets/logo-1024x949INDKC2 1.png";
import img2 from "./Assets/footfall 1.png";
import img3 from "./Assets/design 1.png";
import img4 from "./Assets/opportunity 2.png";
import achiveimg from "./Assets/aerothone 2.png";
import check from "./Assets/check.png";

function Services() {
  return (
    <>
      <div className="service">
        <div className="serTitle">
          <h1>Upcoming Participation</h1>
        </div>
        <div className="serviceTitle"></div>
        <div className="serviceIMG">
          <center>
            <img src={Img} />
          </center>

          <div className="serviceDES">
            <h1 className="title">SAE India hBAJA</h1>
            <h1 className="none"></h1>
            <p>
              Since 2007, BAJA SAEINDIA has challenged engineering students to
              build durable, aesthetically pleasing all-terrain vehicles. Teams
              are judged on cost, design, fabrication, and performance. This
              year, we’re entering the new Hydrogen BAJA (hBAJA) category, using
              Hydrogen-CNG fuel to advance toward a fully hydrogen-powered
              future.
            </p>
          </div>
        </div>
        <div className="ach"></div>
        <div className="aeroTitle"></div>

        <div className="Achievement">
          <div className="achiveimgMob">
            <center>
              <img src={achiveimg} />
            </center>
          </div>
          <div className="achivList">
            <h1>World Robotics Championship - Technoxian</h1>
            <p>
              The World Robotics Championship, organized by Technoxian in
              collaboration with AICRA and MeitY, is an international
              competition held annually in Delhi. Now in its 8th edition, it
              attracts around 50,000 participants from over 75 countries. Our
              team is competing in Bots Combat, Maze Solver, RC Plane, RC Car,
              Water Rocket, and Drone Race events.
            </p>
            <div className="buttonlist">
              {/* <button>
                {" "}
                <img src={check} className="check" />
                FPV Drone racing
              </button> */}
              <button>
                {" "}
                <img src={check} className="check" />
                Robo War
              </button>
              <button>
                {" "}
                <img src={check} className="check" />
                Maze Solver
              </button>
              <button>
                {" "}
                <img src={check} className="check" />
                RC Electric Car race
              </button>
              <button>
                {" "}
                <img src={check} className="check" />
                Water rocket
              </button>
              <button>
                {" "}
                <img src={check} className="check" />
                RC Craft
              </button>
            </div>
          </div>
          <div className="achiveimg">
            <img src={achiveimg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
