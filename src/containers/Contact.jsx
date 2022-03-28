import React from "react";

function Contact () {
  return(
    <>
      <h3>Contáctame</h3>
      <form action="submit">
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" placeholder="Nombre" />
        <label htmlFor="email">Correo: </label>
        <input id="email" type="email" placeholder="Correo" />
        <label htmlFor="message">Mensaje: </label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        {/* <input id="message" type="text" placeholder="Deja tu mensaje"/> */}
        {/* <input type="button" value={Enviar}/> */}
        <button>Enviar</button>
      </form>
    </>
  )
}

export { Contact }