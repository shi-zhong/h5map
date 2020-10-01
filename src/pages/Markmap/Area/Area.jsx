import React from 'react'


const Area = (props) => {

  const { name, shape, coords, index, width, height, check, part, prefix } = props

  const calcSite = () => {
    let site = ""
    switch (shape) {
      case "rect": {
        site = Math.round(coords[0] * width) + "," + Math.round(coords[1] * height) + "," + Math.round(coords[2] * width) + "," + Math.round(coords[3] * height)
        return site
      }
      default: {
        return "0,0,0,0"
      }
    }
  }

  const handleClickLocal = (e) => {
    props.onclick(part, check)
    e.stopPropagation()
  }

  return (
    <area
      onClick={handleClickLocal.bind(this)}
      shape={shape}
      coords={calcSite()}
      alt={prefix + name + index}
    />
  )
}

export default Area;