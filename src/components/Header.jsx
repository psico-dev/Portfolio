import React from "react";
import linkeding from "../assets/img/linkeding.png"
import github from "../assets/img/github.png"
import "../style/Header.css"

function Header () {
  return(
    <header>
      <div className="box-logo">
        <a href="#head" className="logo"></a>
        <p className="title-logo">Web Developer</p>
      </div>

      <div className="header-list">
        <ul>
          <li className="container-list"><a href="#about" className="list">Sobre mi</a></li>
          <li className="container-list"><a href="#skills" className="list">Skills</a></li>
          <li className="container-list"><a href="#proyects" className="list">Proyectos</a></li>
          <li className="container-list"><a href="#contact" className="list">Contáctame</a></li>
        </ul>
      </div>
      <div className="red-logos">
        <ul>
          <li><a href="https://www.linkedin.com/in/andres-psico-dev/" target="_blank" ><img src={linkeding} alt="Linkeding" /></a></li>
          <li><a href="https://github.com/psico-dev" target="_blank"><img src={github} alt="github" /></a></li>
        </ul>
      </div>
      <div className="header-contact">
        <p>
          Andrés Alejandro Pérez García<br />
          <a href="/">
            alejoandi@hotmail.com
          </a>
        </p>
      </div>
    </header>
  )
}

export { Header }