import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          obcaecati ipsum enim sed rem. Eos consequatur temporibus architecto,
          corrupti enim voluptatum beatae at sit molestiae ea exercitationem
          dolor vel? Magni, qui ratione, error doloribus esse neque saepe modi,
          similique non consectetur doloremque consequatur iure enim facilis a
          vitae. Corporis, placeat!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          obcaecati ipsum enim sed rem. Eos consequatur temporibus architecto,
          corrupti enim voluptatum beatae at sit molestiae ea exercitationem
          dolor vel? Magni, qui ratione, error doloribus esse neque saepe modi,
          similique non consectetur doloremque consequatur iure enim facilis a
          vitae. Corporis, placeat!
         
        </p>
      </div>
    </div>
  );
}

export default About;
