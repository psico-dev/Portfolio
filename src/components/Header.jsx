import React from "react";

function Header () {
  return(
    <header>
      <div className="box-logo">
        <img src="" alt="logo Andrés" />
        <p>Andrés</p>
        <p>Web Developer</p>
      </div>

      <div className="header-list">
        <ul>
          <li>Sobre mi</li>
          <li>Skills</li>
          <li>Proyectos</li>
          <li>Contáctame</li>
        </ul>
      </div>
    </header>
  )
}

export { Header }