import React from "react";
import "../style/Home.css"
import { Canvas } from "../components/CanvaHome"
function Home () {
  
  const ref1 = React.createRef()
  const ref2 = React.createRef()
  const ref3 = React.createRef()
  const ref4 = React.createRef()
  const ref5 = React.createRef()
  const ref6 = React.createRef()
  const ref7 = React.createRef()
  const ref8 = React.createRef()
  const ref9 = React.createRef()
  const ref10 = React.createRef()
  const ref11 = React.createRef()
  const ref12 = React.createRef()
  const ref13 = React.createRef()
  const ref14 = React.createRef()
  const ref15 = React.createRef()
  const ref16 = React.createRef()
  const ref17 = React.createRef()
  const ref18 = React.createRef()
  const ref19 = React.createRef()
  const ref20 = React.createRef()
  const ref21 = React.createRef()
  const ref22 = React.createRef()
  const ref23 = React.createRef()
  const ref24 = React.createRef()
  const ref25 = React.createRef()
  const ref26 = React.createRef()
  const ref27 = React.createRef()

  const change = (ref) => {
    ref.current.className = "letter-home, letter-hover"
    setTimeout(
      function () {
        ref.current.className = "letter-home"
      }, 1000
    )
  }

  return(
    <div className="Home" id="head">
      <h1 aria-label="Hola, Soy Andrés desarrollador web" className="letters">
        <span ref={ref1} className="letter-home" onMouseEnter={() => change(ref1)}>H</span>
        <span ref={ref2} className="letter-home" onMouseEnter={() => change(ref2)}>o</span>
        <span ref={ref3} className="letter-home" onMouseEnter={() => change(ref3)}>l</span>
        <span ref={ref4} className="letter-home" onMouseEnter={() => change(ref4)}>a</span>
        <span ref={ref5} className="letter-home" onMouseEnter={() => change(ref5)}>, </span>
        <br />
        <span ref={ref6} className="letter-home" onMouseEnter={() => change(ref6)}>S</span>
        <span ref={ref7} className="letter-home" onMouseEnter={() => change(ref7)}>o</span>
        <span ref={ref8} className="letter-home" onMouseEnter={() => change(ref8)}>y </span>
        <span ref={ref9} className="letter-home" onMouseEnter={() => change(ref9)} style={{padding: "0 0 0 20px"}}>
          A
        </span>
        <span ref={ref10} className="letter-home" onMouseEnter={() => change(ref10)}>n</span>
        <span ref={ref11} className="letter-home" onMouseEnter={() => change(ref11)}>d</span>
        <span ref={ref12} className="letter-home" onMouseEnter={() => change(ref12)}>r</span>
        <span ref={ref13} className="letter-home" onMouseEnter={() => change(ref13)}>é</span>
        <span ref={ref14} className="letter-home" onMouseEnter={() => change(ref14)}>s</span>
        <span ref={ref15} className="letter-home" onMouseEnter={() => change(ref15)}>, </span>
        <br />
        <span ref={ref16} className="letter-home" onMouseEnter={() => change(ref16)}>W</span>
        <span ref={ref17} className="letter-home" onMouseEnter={() => change(ref17)}>e</span>
        <span ref={ref18} className="letter-home" onMouseEnter={() => change(ref18)}>b </span>
        <span ref={ref19} className="letter-home" onMouseEnter={() => change(ref19)} style={{padding: "0 0 0 20px"}}>
          d
        </span>
        <span ref={ref20} className="letter-home" onMouseEnter={() => change(ref20)}>e</span>
        <span ref={ref21} className="letter-home" onMouseEnter={() => change(ref21)}>v</span>
        <span ref={ref22} className="letter-home" onMouseEnter={() => change(ref22)}>e</span>
        <span ref={ref23} className="letter-home" onMouseEnter={() => change(ref23)}>l</span>
        <span ref={ref24} className="letter-home" onMouseEnter={() => change(ref24)}>o</span>
        <span ref={ref25} className="letter-home" onMouseEnter={() => change(ref25)}>p</span>
        <span ref={ref26} className="letter-home" onMouseEnter={() => change(ref26)}>e</span>
        <span ref={ref27} className="letter-home" onMouseEnter={() => change(ref27)}>r</span>
      </h1>
      <Canvas />
      <p className="subtitle">Front End Developer</p>
      <a className="button-contact" href="#contact">Contáctame!</a>
    </div>
  )
}

export { Home }