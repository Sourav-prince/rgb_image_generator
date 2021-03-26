const getColorBitByPixels = (resolution) => {
  for(let i = 1; i<=16;i++){
    let pow = Math.pow(2,i)
    if( pow*pow*pow === resolution ){
      return i
    }
  }
  return 0
}

const generateImageMap = (resolution, width) => {
  let paint = []
  let rgbValues = []
  let currentColorBit = getColorBitByPixels(resolution)
  let offsetMax = width - Math.pow(2,8-currentColorBit)
  let redRepeatations = 3
  let greenRepeatations = 2
  let blueRepeatations = 7

  for (let i = 0; i < resolution; i++) {
    let x = i & width - 1;
    let y = (i / width | 0);
    let r = i << redRepeatations & offsetMax;
    let g = i >> greenRepeatations & offsetMax;
    let b = i >> blueRepeatations & offsetMax;
    paint.push([x,y,r,g,b])
    rgbValues.push(`${r}-${g}-${b}`)
  }

  return {
    paint,
    rgbValues
  }
}

const sleep = (ms) => new Promise(r => setTimeout(r,ms))

export {
  generateImageMap,
  sleep
}