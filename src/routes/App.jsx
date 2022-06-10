import React from "react";
import { Header } from "../components/Header"
import { Home } from "../containers/Home"
import { About } from "../containers/About"
import { Skills } from "../containers/Skills"
import { Work } from "../containers/Work"
import { Contact } from "../containers/Contact"
import { useLazyLoad } from "../hooks/lazyLoad"
import Loading from "../components/Loading"
import "../style/Layout.css"

function App () {
  
  const [showHome, setShowHome] = React.useState(false)
  const [show, setShow] = React.useState(false)
  const [showAbout, setShowAbout] = React.useState(false)
  const [showWork, setShowWork] = React.useState(false)
  const [showContact, setShowContact] = React.useState(false)

  const home = React.createRef()
  const about = React.createRef()
  const skills = React.createRef()
  const work = React.createRef()
  const contact = React.createRef()

  useLazyLoad(home, setShowHome)
  useLazyLoad(about, setShowAbout)
  useLazyLoad(skills, setShow)
  useLazyLoad(work, setShowWork)
  useLazyLoad(contact, setShowContact)

  return(
    <div className="container">
      <section className="header-container">
          <Header />
      </section>
      <section className="landing-container">
        <div ref={home} className="contentLazy" id="head">
          {showHome ? <Home /> : null}
        </div>
        <div ref={about} className="contentLazy" id="about">
          {showAbout ? <About /> : null}
        </div>
        <div ref={skills} className="contentLazy" id="skills">
          {show ?  <Skills /> : null}
        </div>
        <div ref={work} className="contentLazy" id="proyects">
          {showWork ? <Work /> : null}
        </div>
        <div ref={contact} className="contentLazy" id="contact">
          {showContact ? <Contact /> : null}
        </div>
      </section>
    </div>
  )
}

export { App }