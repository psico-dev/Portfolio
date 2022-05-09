import React from "react";
import { Header } from "../components/Header"
import { Home } from "../containers/Home"
import { About } from "../containers/About"
import { Skills } from "../containers/Skills"
import { Work } from "../containers/Work"
import { Contact } from "../containers/Contact"
import "../style/Layout.css"

function App () {
  return(
    <div className="container">
      <section className="header-container">
        <Header />
      </section>
      <section className="landing-container">
        <Home  />
        <About />
        <Skills />
        <Work />
        <Contact />
      </section>
    </div>
  )
}

export { App }