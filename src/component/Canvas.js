import { useEffect, useRef } from "react"
import { generateImageMap, sleep } from "../utils/calculator"

const Canvas = (props) => {
  const canvasRef = useRef(null)
  const { width, height, setDone } = props
  
  const drawImage = async(context, data) => {
    for (let i = 0; i < data.length; i++) {
      let [ x, y, r, g, b ] = data[i]
      context.fillStyle = `rgba(${r},${g},${b}, 1)`
      context.fillRect( x, y, 1, 1 )
      await sleep(0)
    }
    setDone(true)
  }

  useEffect(()=>{
    const canvas = canvasRef.current
    canvas.width = width
    canvas.height = height
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    const context = canvas.getContext('2d')
    const { paint } = generateImageMap(width*height, width)
    drawImage(context,paint)
  },[])

  return(
    <canvas
      ref={canvasRef}
    />
  )
}

export default Canvas