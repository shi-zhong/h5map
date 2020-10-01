import React from 'react'
import Logo from './sitelogo.png'
import './Site.css'

const Site = (props) => {

  const { part, height, width, X, Y, zoom } = props

  const calcWidth = () => {
    if (part) {
      return Math.round(width * 55 / 1920) * (zoom < 200 ? zoom * 0.01 : 2)
    } else {
      return Math.round(width * 40 / 2500) * (zoom < 300 ? zoom * 0.005 : 1.2)
    }
  }

  return (
      <img
        className="sitelogo"
        style={{ left: X * width, top: Y * height }}
        src={Logo}
        alt="site"
        width={calcWidth()}
      />
  )
}

export default Site