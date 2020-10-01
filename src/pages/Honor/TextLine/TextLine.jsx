import React from 'react'

import After from './after.png'
import Before from './before.png'

const TextLine = (props) => {

  const { count, device } = props

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
      <div className="score-con">
        <img className="text-img" width={141 * device.width / 540} src={Before} alt="before" />
        <span style={style} className="score">{count}</span>
        <img className="text-img" width={71 * device.width / 540} src={After} alt="after" />
      </div>
    </div>
  )
}


export default TextLine