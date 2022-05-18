import React from "react";
import "../style/Canva.css"

function Canvas () {

  const canva = React.createRef(null)

  // React.useEffect(() => {
  //   let canvas = canva.current
  //   let ctx = canvas.getContext('2d')
  //   console.log(canva.current)

  //   ctx.fillStyle = "aqua"
  //   ctx.fillRect(250,250,300,300);
  //   ctx.clearRect(300,300,60,60);
  //   ctx.strokeRect(450,450,50,50)
  // }, [])


  return(
    <canvas ref={canva} width="1350" height="630"></canvas>
  )
}

export { Canvas }