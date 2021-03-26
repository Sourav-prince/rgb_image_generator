import { useEffect, useRef } from "react"
import { generateImageMap } from "../utils/calculator"

const Canvas = (props) => {
  const canvasRef = useRef(null)
  const { width, height } = props
  
  useEffect(()=>{
    const canvas = canvasRef.current
    canvas.width = width
    canvas.height = height
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    const context = canvas.getContext('2d')
    const { paint } = generateImageMap(width*height, width)
    for (var i = 0; i < paint.length; i++) {
      let [ x, y, r, g, b ] = paint[i]
      context.fillStyle = `rgba(${r},${g},${b}, 1)`
      context.fillRect( x, y, 1, 1 )
    }
  },[])

  return(
    <canvas
      ref={canvasRef}
    />
  )
}

export default Canvas