import React from "react";
import linkeding from "../assets/img/linkeding.png"
import github from "../assets/img/github.png"
import "../style/Header.css"

function Header () {
  return(
    <header>
      <div className="box-logo">
        <a href="/" className="logo"></a>
        <p className="title-logo">Web Developer</p>
      </div>

      <div className="header-list">
        <ul>
          <li className="container-list"><a href="/" className="list">Sobre mi</a></li>
          <li className="container-list"><a href="/" className="list">Skills</a></li>
          <li className="container-list"><a href="/" className="list">Proyectos</a></li>
          <li className="container-list"><a href="/" className="list">Contáctame</a></li>
        </ul>
      </div>
      <div className="red-logos">
        <ul>
          <li><a href="/"><img src={linkeding} alt="Linkeding" /></a></li>
          <li><a href="/"><img src={github} alt="github" /></a></li>
        </ul>
      </div>
      <div className="header-contact">
        <p>
          Andrés Pérez<br />
          alejoandi@hotmail.com
        </p>
      </div>
    </header>
  )
}

export { Header }