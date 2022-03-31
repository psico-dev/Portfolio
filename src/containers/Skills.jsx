import React from "react";
import "../style/Skills.css"

function Skills () {
  return(
    <section className="skills">
      <div className="skills-container">
        <p>HTML</p>
        <div className="container-flip">
          <div className="flip">
            hola
          </div>
        </div>
        <p>CSS</p>
        <div className="container-flip">
          <div className="flip">
            hola
          </div>
        </div>
        <p>JavaScript</p>
        <div className="container-flip">
          <div className="flip">
            hola
          </div>
        </div>
        <p>React</p>
        <div className="container-flip">
          <div className="flip">
            hola
          </div>
        </div>
      </div>

      <div className="skills-description">
        <h2>Skills</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus aut eaque fugiat laboriosam, quibusdam tenetur deserunt unde quaerat perferendis tempora aliquid illo laborum labore voluptatum, nostrum cum nobis. Nesciunt.</p>
      </div>
    </section>
  )
}

export { Skills }