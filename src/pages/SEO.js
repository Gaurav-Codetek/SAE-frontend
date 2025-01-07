import React, { useState } from 'react';
import Garuda from './Assets/Garuda Motorsports.png'
import Alpha from './Assets/alpha_one_color.png'
import vayuveer from './Assets/vayuveer.png'

export default function SEO() {
  const [expandedBox, setExpandedBox] = useState(null);

  const handleClick = (index) => {
    setExpandedBox(index === expandedBox ? null : index);
  };

  return (
    <div className="main containerMain">
        <div className="mainHead container">
            <h1>SAE Teams</h1>
        </div>

        <div className="cards container">
            <div className="card">
                <div className="cardImg">
                    <center><img src={Garuda} alt="Garuda motorsports"/></center>
                </div>
                <div className="cardHead">
                    <h1>Garuda Motorsports</h1>
                </div>
                <div className="cardContent">
                    <p>Motorsports team of SAE UIET, aims to foster innovation and excellence in Motorsports and Mobility.</p>
                </div>
            </div>
            <div className="space"></div>
            <div className="card">
                <div className="cardImg">
                    <center><img src={vayuveer} alt="Team VayuVeer"/></center>
                </div>
                <div className="cardHead">
                    <h1>Team VayuVeer</h1>
                </div>
                <div className="cardContent">
                    <p>Aerospace team of SAE UIET, Aims to power up thrusters to fly high in the sky with modernized equipments. </p>
                </div>
            </div>
            <div className="space"></div>
            <div className="card">
                <div className="cardImg">
                    <center><img src={Alpha} alt="Alpha One"/></center>
                </div>
                <div className="cardHead">
                    <h1>Alpha One</h1>
                </div>
                <div className="cardContent">
                    <p>Software team of SAE UIET. Aims to revolutionize the problems with feasible technology. </p>
                </div>
            </div>
            {/* <div className="space"></div>
            <div className="card">
                <div className="cardImg">
                    <center><img src="./images/intelligent analytics.png" alt="Intelligent Analytics"/></center>
                </div>
                <div className="cardHead">
                    <h1>Prahar</h1>
                </div>
                <div className="cardContent">
                    <p>Get access to swag spend reporting, when to reorder, and more.</p>
                </div>
            </div> */}
        </div>
    </div>
  );
}
