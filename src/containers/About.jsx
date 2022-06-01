import React from "react";
import { Canva } from "../components/CanvaAbout"
import "../style/About.css"

function About () {
  return(
    <section className="about" id="about">
      <div className="container-description-about">
        <h2>Sobre Mi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi quod debitis libero fuga voluptatum unde omnis provident in at deleniti, inventore magni sint labore beatae assumenda velit dolore nam?</p>
      </div>
      <div className="container-circul-about">
        <Canva className="canva" />
      </div>
    </section>
  )
}

export { About }