import React from 'react'
import Logo from './sitelogo.png'
import './Site.css'

const Site = (props) => {

  const { coords, height, width, X, Y, zoom } = props

  const style = () => {
    return {
      top: Math.round(coords[1] * height),
      left: Math.round(coords[0] * width),
      width: Math.round((coords[2] - coords[0]) * width),
      height: Math.round((coords[3] - coords[1]) * height),
    }
  }

  return (
    // <div className="site" style={style()}></div>
    <img
      className="sitelogo"
      style={{ left: X * width, top: Y * height }}
      src={Logo}
      alt="site"
      width={Math.round(width * 55 / 1920) * (zoom < 200 ? zoom * 0.01 : 2)}
    />
  )
}

export default Site