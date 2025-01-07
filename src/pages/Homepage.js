import React from "react";
import Idea from "./Assets/bulb.png";
import logogroup from "./Assets/logogroup.png";
import HOMEIMG from "./Assets/HOMEIMG.png";
// import { IoChevronForwardCircleOutline } from "react-icons/io5";
// import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="first">
          <div className="discription">
            <h1>
              Society of <br />
              Automotive Engineers <img src={Idea} alt="" />
              <br />
              UIET PU
            </h1>
            <div className="titleDes">
              SAE UIET PU is the community for aspiring engineers, striving for
              new discoveries and invention.
            </div>
          </div>
          <div className="homeIMG">
            <img src={HOMEIMG} alt="" />
          </div>
        </div>
        <div className="Groups">
          <div className="partner">
            <h2 className="members">
              Members In 98+ Countries & more than 127,000 Engineers
            </h2>
            <span className="partnerDes">
              SAE International is a global association of more than 127,000
              engineers and related technical experts in the automotive,
              aerospace and commercial-vehicle industries with members in more
              than 98 countries throughout the world.
            </span>
          </div>
          {/* <div className='partenerLogo' >
            <div className="logoimg">
              <img src={logogroup} alt="" />
              <img src={logogroup} alt="" />
              <img src={logogroup} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
