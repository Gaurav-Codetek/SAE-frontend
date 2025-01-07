import React, { useEffect, useRef } from "react";
import project1 from "./Assets/1.jpg";
import project2 from "./Assets/w.jpg";
import project3 from "./Assets/2.jpg";
import project4 from "./Assets/3.jpg";
import project5 from "./Assets/4.jpg";
import project6 from "./Assets/5.jpg";
import project7 from "./Assets/6.jpg";
import project8 from "./Assets/7.jpg";
import project9 from "./Assets/8.jpg";
import project10 from "./Assets/9.jpg";
import project11 from "./Assets/10.jpg";
import project12 from "./Assets/11.jpg";

export default function Project() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    // Set initial scroll position to 150px
    if (slider) {
      slider.scrollLeft = 175;
    }

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        if (slider) {
          slider.scrollLeft += slider.clientWidth; // Slide by one full width of the slider
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 175; // Reset scroll position at the end
          }
        }
      }, 2000); // Adjust scroll speed
    };

    startAutoSlide();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="projects">
        <div className="projectTitle">
          <h1>SAE gallery</h1>
        </div>
        <div className="projectList" ref={sliderRef}>
          <div className="set">
            <img src={project1} alt="Project 1" />
            <img src={project2} alt="Project 2" />
            <img src={project3} alt="Project 3" />
            <img src={project4} alt="Project 4" />
            <img src={project5} alt="Project 5"/>
            <img src={project6} alt="Project 6" />
          </div>
          <div className="set">
            <img src={project7} alt="Project 1" />
            <img src={project8} alt="Project 2" />
            <img src={project9} alt="Project 3" />
            <img src={project10} alt="Project 4" />
            <img src={project11} alt="Project 5" />
            <img src={project12} alt="Project 6" />
          </div>
          <div className="set">
            <img src={project1} alt="Project 1" />
            <img src={project2} alt="Project 2" />
            <img src={project3} alt="Project 3" />
            <img src={project4} alt="Project 4" />
            <img src={project5} alt="Project 5"/>
            <img src={project6} alt="Project 6" />
          </div>
          <div className="set">
            <img src={project7} alt="Project 1" />
            <img src={project8} alt="Project 2" />
            <img src={project9} alt="Project 3" />
            <img src={project10} alt="Project 4" />
            <img src={project11} alt="Project 5" />
            <img src={project12} alt="Project 6" />
          </div>
        </div>
      </div>
    </>
  );
}
