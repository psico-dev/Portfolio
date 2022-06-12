import React from "react";
import { Canva } from "../components/CanvaAbout"
import "../style/About.css"

function About () {
  return(
    <section className="about">
      <div className="container-about">
        <div className="container-description-about">
          <h2 className="title-about">Sobre Mi</h2>
          <p>Hola, soy Andrés y siempre he sido alguien muy curioso, con veintipocos años quise adentrarme al mundo de la programación web, con el fin de crear mi propio espacio en este mundo extraño de internet, siento que muchos han moldeado el mundo a su imagen y ya no existen muchos espacios para eso, pero ahora tenemos un lugar infinito para moldearlo nosotros.
          Llevar a la práctica interfaces amigables, con sentido y funcionales, es un gran modo de transformar el mundo cibernético y quiero hacer parte de este cambio. 
          </p>
        </div>
      </div>
      <div className="container-circul-about">
        <Canva className="canva" />
      </div>
    </section>
  )
}

export { About }