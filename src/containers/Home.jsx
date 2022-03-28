import React from "react";
import "../style/Home.css"

function Home () {
  return(
    <div className="Home">
      <h1 aria-label="Hola, Soy Andrés desarrollador web">
        <span>H</span>
        <span>o</span>
        <span>l</span>
        <span>a</span>
        <span>, </span>
        <br />
        <span>S</span>
        <span>o</span>
        <span>y </span>
        <span>A</span>
        <span>n</span>
        <span>d</span>
        <span>r</span>
        <span>é</span>
        <span>s</span>
        <span>, </span>
        <br />
        <span>W</span>
        <span>e</span>
        <span>b </span>
        <span>d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
      </h1>
      <p className="subtitle">Front End Developer</p>
      <a className="button-contact" href="/">Contáctame!</a>
    </div>
  )
}

export { Home }