import React from "react";
import "../style/Contact.css"

function Contact () {
  return(
    <section className="contact">
      <h2>Contáctame</h2>
      <form name="contact" className="form" netlify>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" placeholder="Nombre" />
        <label htmlFor="email">Correo: </label>
        <input id="email" type="email" placeholder="Correo" />
        <label htmlFor="message">Mensaje:</label>
        <textarea name="message" id="message" cols="20" rows="10" placeholder="Deja tu mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export { Contact }