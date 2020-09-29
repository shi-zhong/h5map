import React, { Component } from 'react'
import Map from './Map/Map'
import SwitchBt from './Switch/Switch'
import './MarkMap.css'

export default class MarkMap extends Component {

  state = {
    count: 0,
    commit: true,
    part: false,
    southlake: {
      places: [
        // 学生宿舍
        {
          name: "stuDoc",
          index: 1,
          X: 0.49655,
          Y: 0.1967,
          shape: "rect",
          coords: [0.4612, 0.1676, 0.5468, 0.2148]
        }, {
          name: "stuDoc",
          index: 2,
          X: 0.49655,
          Y: 0.2471,
          shape: "rect",
          coords: [0.4612, 0.2250, 0.5468, 0.2648]
        }, {
          name: "stuDoc",
          index: 3,
          X: 0.49655,
          Y: 0.2986,
          shape: "rect",
          coords: [0.4612, 0.2699, 0.5368, 0.3088]
        }, {
          name: "stuDoc",
          index: 4,
          X: 0.269,
          Y: 0.4405,
          shape: "rect",
          coords: [0.2207, 0.42, 0.3232, 0.45]
        }, {
          name: "stuDoc",
          index: 5,
          X: 0.275,
          Y: 0.4794,
          shape: "rect",
          coords: [0.2207, 0.46, 0.3332, 0.49]
        }, {
          name: "stuDoc",
          index: 6,
          X: 0.1064,
          Y: 0.3878,
          shape: "rect",
          coords: [0.0799, 0.3641, 0.1492, 0.3935]
        }, {
          name: "stuDoc",
          index: 7,
          X: 0.1054,
          Y: 0.4313,
          shape: "rect",
          coords: [0.0799, 0.4091, 0.1492, 0.4380]
        }, {
          name: "stuDoc",
          index: 8,
          X: 0.1064,
          Y: 0.4736,
          shape: "rect",
          coords: [0.0799, 0.4501, 0.1492, 0.4830]
        }, {
          name: "stuDoc",
          index: 9,
          X: 0.1094,
          Y: 0.524,
          shape: "rect",
          coords: [0.0559, 0.5051, 0.1652, 0.5360]
        }, {
          name: "stuDoc",
          index: 10,
          X: 0.1094,
          Y: 0.5652,
          shape: "rect",
          coords: [0.0559, 0.5451, 0.1652, 0.5760]
        }, {
          name: "stuDoc",
          index: 11,
          X: 0.49,
          Y: 0.8363,
          shape: "rect",
          coords: [0.46, 0.80, 0.58, 0.845]
        }, {
          name: "stuDoc",
          index: 12,
          X: 0.11,
          Y: 0.9302,
          shape: "rect",
          coords: [0.0723, 0.92, 0.15, 0.95]

        }, {
          name: "stuDoc",
          index: 13,
          X: 0.1138,
          Y: 0.8901,
          shape: "rect",
          coords: [0.0723, 0.86, 0.15, 0.9]
        }, {
          name: "stuDoc",
          index: 14,
          X: 0.612,
          Y: 0.6624,
          shape: "rect",
          coords: [0.575, 0.6517, 0.70, 0.69]
        }, {
          name: "stuDoc",
          index: 15,
          X: 0.466,
          Y: 0.5331,
          shape: "rect",
          coords: [0.42, 0.52, 0.5199, 0.5572]
        }, {
          name: "sl_playground",
          index: 1,
          X: 0.274,
          Y: 0.7471,
          shape: "rect",
          coords: [0.19, 0.68, 0.35, 0.85]
        }, {
          name: "sl_canteen",
          index: 1,
          X: 0.477,
          Y: 0.4107,
          shape: "rect",
          coords: [0.40, 0.38, 0.56, 0.45]
        }, {
          name: "unifloor",
          index: 1,
          X: 0.798,
          Y: 0.2585,
          shape: "rect",
          coords: [0.6512, 0.22, 0.94, 0.28]
        }, {
          name: "sl_market",
          index: 1,
          X: 0.5290,
          Y: 0.3192,
          shape: "rect",
          coords: [0.54, 0.30, 0.62, 0.33]
        }, {
          name: "sl_gym",
          index: 1,
          X: 0.2639,
          Y: 0.6018,
          shape: "rect",
          coords: [0.21, 0.55, 0.32, 0.63]
        }, {
          name: "college",
          index: 1,
          X: 0.50,
          Y: 0.659,
          shape: "rect",
          coords: [0.4599, 0.6355, 0.53, 0.6755]
        },
      ],
      check: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  changePart = () => {
    const { part } = this.state
    this.setState({
      part: !part
    })
  }

  checkSite = (part, index) => {
    const { southlake } = this.state
    if (part) {
      southlake.check[index] = !southlake.check[index];
      this.setState({
        southlake
      })
    } else {

    }
  }

  calcBtn = () => {
    const btnWH = 236 / 64;
    const { device } = this.props
    return {
      width: device.width / 2.5,
      height: device.width / 2.5 / btnWH
    }
  }

  commit = () => {
    const { southlake } = this.state
    let count = 0;
    for (let i of southlake.check) count += i;
    this.props.router('/honor', count);
  }

  willCommit = () => {
    this.setState({
      commit: true
    })
  }

  render() {
    const { southlake, part, commit } = this.state
    const { device } = this.props
    const btn = this.calcBtn()
    const baseOfTop = 0
    return (
      <div>
        <SwitchBt part={part} onclick={this.changePart.bind(this)} />
        <div
          className="map-switch"
          style={{ height: device.height - baseOfTop, width: device.width }}
        >
          <Map
            className={"map-switch-con " + (part ? "map-font" : "map-back")}
            baseOfTop={baseOfTop}
            part={true}
            device={device}
            places={southlake.places}
            check={southlake.check}
            checkSite={this.checkSite.bind(this)}
          />
          <Map
            className={"map-switch-con " + (!part ? "map-font" : "map-back")}
            baseOfTop={baseOfTop}
            part={false}
            device={device}
            places={[]}
            check={[]}
            checkSite={this.checkSite.bind(this)}
          />
        </div>
        {/* commit */}
        <div
          className="commit-btn"
          onClick={commit ? this.commit.bind(this) : this.willCommit.bind(this)}
          style={{ marginTop: commit ? -(btn.height + 50) : -8, ...btn }}
        ></div>
        <div className="ccnu" style={device}></div>
      </div>
    )
  }

}
