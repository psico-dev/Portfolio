import React from "react";

function Canvas () {

  const canva = React.createRef(null)

  return(
    <canvas ref={canva}></canvas>
  )
}

export { Canvas }