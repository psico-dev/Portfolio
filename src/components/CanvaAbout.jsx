import React from "react";
import "../style/CanvaAbout.css"

function Canva (){
  const canva = React.createRef(null)

  React.useEffect(() => {
      let canvas = canva.current
      let ctx = canvas.getContext('2d')
      console.log(canva.current)
  
      ctx.fillStyle = "aqua"
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }, [])

  return(
    <canvas ref={canva} width="450" height="500"></canvas>
  )
}

export { Canva }