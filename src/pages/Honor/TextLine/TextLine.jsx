import React from 'react'

import After from './after.png'
import Before from './before.png'

const TextLine = (props) => {

  const { count, device } = props

  const calcP = () => {
    return (count + "").length * (24 * device.width / 540 / 1.5) * 0.4 + 30
  }

  const style = {
    height: 24 * device.width / 540,
    lineHeight: 24 * device.width / 540 + 'px',
    fontSize: 24 * device.width / 540 / 1.5 + 'px',
  }

  const positionCon = {
    marginTop: 310 * device.height / 780 + 'px',
    marginLeft: 119 * device.width / 540 + 'px',
    width: 280 * device.width / 540 + 'px',
    height: 70 * device.height / 780 + 'px'
  }

  return (
    <div style={positionCon} className="position-con">
      <div className="score-con" style={{ width: 120 * device.width / 540 + 78 * device.width / 540 + calcP()}}>
        <img className="text-img" width={120 * device.width / 540} src={Before} alt="before" />
        <span style={style} className="score">{count}</span>
        <img className="text-img" width={78 * device.width / 540} src={After} alt="after" />
      </div>
    </div>
  )
}


export default TextLine