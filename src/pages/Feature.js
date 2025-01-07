import React from "react";
import feature from "./Assets/WHY_SAE 1.png";
import img1 from "./Assets/service-icon-1.png.png";
import img2 from "./Assets/service-icon-2.png.png";
import img3 from "./Assets/service-icon-3.png.png";
import img4 from "./Assets/service-icon-4.png.png";
import img5 from "./Assets/service-icon-5.png.png";
import img6 from "./Assets/Link.png";
export default function Feature() {
  return (
    <>
      <div className="feature">
        <div className="featureTitle">
          <h1>Benefits</h1>
        </div>
        <div className="featureDEs">
          <img className="feaimg" src={feature} />
          <div className="featureList">
            <span className="card1">
              {" "}
              <img className="cardIcon" src={img1} />
              <div>
                <h4>Gain Hands-On Experience</h4>
                <p>
                  Engage in real-world engineering projects at SAE UIET PU,
                  where you'll design, build, and test solutions.
                </p>
              </div>
            </span>
            <span className="card2">
              {" "}
              <img className="cardIcon" src={img2} />
              <div>
                <h4>Learn Beyond the Classroom</h4>
                <p>
                  At SAE UIET PU, apply theoretical knowledge to real-world
                  challenges, expanding your understanding of engineering
                  principles.
                </p>
              </div>
            </span>
            <span className="card3">
              {" "}
              <img className="cardIcon" src={img5} />
              <div>
                <h4>Chance to Compete on an International Stage</h4>
                <p>
                  {" "}
                  SAE UIET PU offers opportunities to compete globally in events
                  like SAE BAJA, showcasing your innovations against top teams.
                </p>
              </div>
            </span>
            <span className="card4">
              {" "}
              <img className="cardIcon" src={img5} />
              <div>
                <h4>Expert Sessions and Guest Lectures </h4>
                <p>
                  Learn from industry professionals at SAE UIET PU through
                  expert sessions and guest lectures on cutting-edge technology
                  and career development.
                </p>
              </div>
            </span>
            <span className="card5">
              {" "}
              <img className="cardIcon" src={img5} />
              <div>
                <h4>Industrial Visits for Real-World Exposure</h4>
                <p>
                  SAE UIET PU organizes industrial visits to manufacturing
                  plants and tech hubs, giving you firsthand exposure to
                  engineering processes.
                </p>
              </div>
            </span>
            {/* <span className='card3'> <img className='cardIcon' src={img5} /><div><h4>Graphic Design</h4><p>Lots of code to execute your business, support decisions and take it to that next level. A team of experts can help!</p></div><img className='arrow' src={img6} /></span> */}
          </div>
        </div>
      </div>
    </>
  );
}
