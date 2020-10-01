import React, { Component } from 'react'
import './Honor.css'

import Lvl1 from './lvl1.png'
import Lvl2 from './lvl2.png'
import Lvl3 from './lvl3.png'
import Lvl4 from './lvl4.png'

import TextLine from './TextLine/TextLine'

export default class Honor extends Component {

  state = {
    lvl: 1
  }

  onRouter = (router) => {
    this.props.router(router)
  }

  calcLvl = () => {
    const { param } = this.props
    console.log(param)
    if (param <= 18) return 1;
    if (param <= 35) return 2;
    if (param <= 72) return 3;
    return 4;
  }



  render() {
    const lvl = this.calcLvl()
    const { param, device } = this.props
    return (
      <div>
        {lvl === 1 && <img className="honor-image" width={device.width} height={device.height} src={Lvl1} alt="lvl1" />}
        {lvl === 2 && <img className="honor-image" width={device.width} height={device.height} src={Lvl2} alt="lvl1" />}
        {lvl === 3 && <img className="honor-image" width={device.width} height={device.height} src={Lvl3} alt="lvl1" />}
        {lvl === 4 && <img className="honor-image" width={device.width} height={device.height} src={Lvl4} alt="lvl1" />}
        <TextLine count={param} device={device} />
      </div>
    )
  }
}