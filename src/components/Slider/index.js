import React, { useEffect } from "react";
import projects from "./projects";
import sliderOptions from "./options";
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider"
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

function Slider() {
  useEffect(() => {
    tns(sliderOptions);
  })

  const baseUrl = "https://github.com/kgeary/"

  return (
    <div id="slider">
      {projects.map(project => (
        <div key={project.link}>
          <a href={baseUrl + project.link} target="_blank" rel="noopener noreferrer">
            <img
              className="slider-image tns-lazy-img"
              src=""
              alt={project.title}
              data-src={project.img} />
          </a>
          <h5>{project.title}</h5>
          <p>{project.tags}</p>
        </div>
      ))};
    </div>
  );
}

export default Slider;