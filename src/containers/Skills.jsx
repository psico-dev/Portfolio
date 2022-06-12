import React from "react";
import "../style/Skills.css"

function Skills () {
  return(
    <section className="skills">
      <div className="skills-container">
        <p>HTML</p>
        <div className="container-flip">
          <div className="flip1">
            <div className="flip"></div>
          </div>
        </div>
        <p>CSS</p>
        <div className="container-flip">
          <div className="flip2">
            <div className="flip"></div>
          </div>
        </div>
        <p>JavaScript</p>
        <div className="container-flip">
          <div className="flip3">
            <div className="flip"></div>
          </div>
        </div>
        <p>React</p>
        <div className="container-flip">
          <div className="flip4">
            <div className="flip"></div>
          </div>
        </div>
      </div>

      <div className="container-skills-description">
        <div className="skills-description">
          <h2>Skills</h2>
          <p>Como buen desarrollador frontend, me he concentrado en entender las tecnologías estándar que componen el core de la web, como lo es HTML, CSS y JavaScript dándole especial atención a la maquetación y reutilización de elementos, haciendo aplicaciones como piezas de lego, dejando que cada parte pueda vivir en su contexto y sea reutilizable. Teniendo en mente esta funcionalidad me especialicé en el framework por excelencia para el diseño modular sin dejar de lado el SEO de las páginas como es React.</p>
        </div>
      </div>
    </section>
  )
}

export { Skills }