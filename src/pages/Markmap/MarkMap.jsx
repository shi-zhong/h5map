import React, { Component } from 'react'
import Map from './Map/Map'
import SwitchBt from './Switch/Switch'
import './MarkMap.css'

export default class MarkMap extends Component {

  state = {
    count: 0,
    part: false,
    southlake: {
      prefix: "southlake-",
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
    },
    homeplace: {
      prefix: "homeplace-",
      places: [{
        name: "teachDoc",
        index: 1,
        X: 0.749,
        Y: 0.658,
        shape: "rect",
        coords: [0.72, 0.62, 0.83, 0.66]
      }, {
        name: "teachDoc",
        index: 2,
        X: 0.804,
        Y: 0.68,
        shape: "rect",
        coords: [0.72, 0.67, 0.84, 0.685]
      }, {
        name: "teachDoc",
        index: 3,
        X: 0.78,
        Y: 0.707,
        shape: "rect",
        coords: [0.70, 0.695, 0.84, 0.72]
      }, {
        name: "teachDoc",
        index: 4,
        X: 0.814,
        Y: 0.767,
        shape: "rect",
        coords: [0.785, 0.725, 0.845, 0.795]
      },
      // ----------------------------------------
      {
        name: "stuDocYB",
        index: 1,
        X: 0.528, Y: 0.892,
        shape: "rect",
        coords: [0.48, 0.885, 0.58, 0.90]
      }, {
        name: "stuDocYB",
        index: 2,
        X: 0.53, Y: 0.867,
        shape: "rect",
        coords: [0.48, 0.865, 0.58, 0.878]
      }, {
        name: "stuDocYB",
        index: 3,
        X: 0.529, Y: 0.852,
        shape: "rect",
        coords: [0.48, 0.845, 0.58, 0.858]
      }, {
        name: "stuDocYB",
        index: 4,
        X: 0.417, Y: 0.86,
        shape: "rect",
        coords: [0.36, 0.855, 0.46, 0.87]
      }, {
        name: "stuDocYB",
        index: 5,
        X: 0.414, Y: 0.829,
        shape: "rect",
        coords: [0.36, 0.825, 0.46, 0.842]
      },
      // east
      {
        name: "stuDocET",
        index: 2,
        X: 0.642, Y: 0.625,
        shape: "rect",
        coords: [0.60, 0.62, 0.68, 0.635]
      }, {
        name: "stuDocET",
        index: 3,
        X: 0.564, Y: 0.652,
        shape: "rect",
        coords: [0.535, 0.645, 0.59, 0.66]
      }, {
        name: "stuDocET",
        index: 4,
        X: 0.64, Y: 0.654,
        shape: "rect",
        coords: [0.605, 0.64, 0.67, 0.66]
      }, {
        name: "stuDocET",
        index: 5,
        X: 0.564, Y: 0.68,
        shape: "rect",
        coords: [0.535, 0.675, 0.59, 0.69]
      }, {
        name: "stuDocET",
        index: 6,
        X: 0.638, Y: 0.679,
        shape: "rect",
        coords: [0.61, 0.67, 0.675, 0.685]
      }, {
        name: "stuDocET",
        index: 7,
        X: 0.562, Y: 0.707,
        shape: "rect",
        coords: [0.535, 0.70, 0.59, 0.715]
      }, {
        name: "stuDocET",
        index: 8,
        X: 0.637, Y: 0.709,
        shape: "rect",
        coords: [0.605, 0.70, 0.665, 0.715]
      }, {
        name: "stuDocET",
        index: 9,
        X: 0.563, Y: 0.724,
        shape: "rect",
        coords: [0.535, 0.72, 0.59, 0.735]
      }, {
        name: "stuDocET",
        index: 11,
        X: 0.499, Y: 0.706,
        shape: "rect",
        coords: [0.47, 0.700, 0.52, 0.73]
      }, {
        name: "stuDocET",
        index: 12,
        X: 0.481, Y: 0.826,
        shape: "rect",
        coords: [0.475, 0.825, 0.533, 0.834]
      }, {
        name: "stuDocET",
        index: 14,
        X: 0.668, Y: 0.816,
        shape: "rect",
        coords: [0.635, 0.81, 0.695, 0.82]
      },
      // west
      {
        name: "stuDocWT",
        index: 1,
        X: 0.298, Y: 0.444,
        shape: "rect",
        coords: [0.26, 0.435, 0.323, 0.451]
      }, {
        name: "stuDocWT",
        index: 4,
        X: 0.381, Y: 0.47,
        shape: "rect",
        coords: [0.34, 0.461, 0.41, 0.478]
      }, {
        name: "stuDocWT",
        index: 5,
        X: 0.299, Y: 0.498,
        shape: "rect",
        coords: [0.26, 0.485, 0.323, 0.507]
      }, {
        name: "stuDocWT",
        index: 6,
        X: 0.377, Y: 0.497,
        shape: "rect",
        coords: [0.34, 0.485, 0.41, 0.507]
      }, {
        name: "stuDocWT",
        index: 7,
        X: 0.185, Y: 0.533,
        shape: "rect",
        coords: [0.155, 0.515, 0.223, 0.54]
      }, {
        name: "stuDocWT",
        index: 8,
        X: 0.192, Y: 0.564,
        shape: "rect",
        coords: [0.16, 0.55, 0.223, 0.58]
      },
      // canteen
      {
        name: "canteen",
        index: 1,
        X: 0.181, Y: 0.441,
        shape: "rect",
        coords: [0.12, 0.42, 0.21, 0.48]
      }, {
        name: "canteen",
        index: 2,
        X: 0.483, Y: 0.735,
        shape: "rect",
        coords: [0.45, 0.735, 0.54, 0.77]
      }, {
        name: "canteen",
        index: 3,
        X: 0.64, Y: 0.776,
        shape: "rect",
        coords: [0.59, 0.775, 0.695, 0.785]
      }, {
        name: "canteen",
        index: 4,
        X: 0.612, Y: 0.92,
        shape: "rect",
        coords: [0.59, 0.915, 0.64, 0.96]
      },
      // playground
      {
        name: "playground",
        index: 2,
        X: 0.307, Y: 0.625,
        shape: "rect",
        coords: [0.25, 0.60, 0.38, 0.70]
      }, {
        name: "playground",
        index: 3,
        X: 0.416, Y: 0.619,
        shape: "rect",
        coords: [0.39, 0.60, 0.45, 0.65]
      }, {
        name: "playground",
        index: 4,
        X: 0.679, Y: 0.852,
        shape: "rect",
        coords: [0.61, 0.85, 0.76, 0.90]
      }, {
        name: "playground",
        index: 5,
        X: 0.699, Y: 0.654,
        shape: "rect",
        coords: [0.69, 0.65, 0.71, 0.69]
      }, {
        name: "playground",
        index: 6,
        X: 0.482, Y: 0.675,
        shape: "rect",
        coords: [0.4, 0.66, 0.53, 0.69]
      }, {
        name: "playground",
        index: 7,
        X: 0.29, Y: 0.525,
        shape: "rect",
        coords: [0.26, 0.52, 0.34, 0.59]
      }, {
        name: "playground",
        index: 8,
        X: 0.745, Y: 0.776,
        shape: "rect",
        coords: [0.705, 0.73, 0.77, 0.79]
      },
      // college
      {
        name: "college",
        index: 1,
        X: 0.271, Y: 0.391,
        shape: "rect",
        coords: [0.23, 0.38, 0.315, 0.405]
      }, {
        name: "college",
        index: 2,
        X: 0.404, Y: 0.391,
        shape: "rect",
        coords: [0.36, 0.38, 0.45, 0.405]
      }, {
        name: "college",
        index: 3,
        X: 0.375, Y: 0.33,
        shape: "rect",
        coords: [0.31, 0.32, 0.435, 0.35]
      }, {
        name: "college",
        index: 5,
        X: 0.686,
        Y: 0.503,
        shape: "rect",
        coords: [0.645, 0.493, 0.726, 0.516]
      }, {
        name: "college",
        index: 6,
        X: 0.687,
        Y: 0.538,
        shape: "rect",
        coords: [0.627, 0.529, 0.74, 0.552]
      }, {
        name: "college",
        index: 7,
        X: 0.575,
        Y: 0.553,
        shape: "rect",
        coords: [0.551, 0.539, 0.595, 0.571]
      }, {
        name: "college",
        index: 8,
        X: 0.369, Y: 0.281,
        shape: "rect",
        coords: [0.31, 0.26, 0.435, 0.295]
      }, {
        name: "college",
        index: 9,
        X: 0.75, Y: 0.386,
        shape: "rect",
        coords: [0.67, 0.37, 0.82, 0.415]
      }, {
        name: "college",
        index: 10,
        X: 0.823, Y: 0.514,
        shape: "rect",
        coords: [0.779, 0.496, 0.843, 0.548]
      }, {
        name: "college",
        index: 11,
        X: 0.817,
        Y: 0.475,
        shape: "rect",
        coords: [0.769, 0.448, 0.852, 0.477]
      }, {
        name: "college",
        index: 15,
        X: 0.742,
        Y: 0.809,
        shape: "rect",
        coords: [0.706, 0.801, 0.778, 0.828]
      }, {
        name: "college",
        index: 16,
        X: 0.812,
        Y: 0.816,
        shape: "rect",
        coords: [0.802, 0.808, 0.823, 0.837]
      }, {
        name: "college",
        index: 17,
        X: 0.487,
        Y: 0.62,
        shape: "rect",
        coords: [0.461, 0.606, 0.521, 0.643]
      },
      // other
      {
        name: "stuActCenter",
        index: 1,
        shape: "rect",
        X: 0.712,
        Y: 0.589,
        coords: [0.689, 0.582, 0.733, 0.605]
      }, {
        name: "olders",
        index: 1,
        shape: "rect",
        X: 0.461,
        Y: 0.549,
        coords: [0.444, 0.543, 0.478, 0.57]
      }, {
        name: "hotel",
        index: 1,
        X: 0.907, Y: 0.501,
        shape: "rect",
        coords: [0.873, 0.489, 0.924, 0.536]
      }, {
        name: "hospital",
        index: 1,
        X: 0.773,
        Y: 0.326,
        shape: "rect",
        coords: [0.739, 0.312, 0.806, 0.335]
      }, {
        name: "hospital",
        index: 2,
        X: 0.69,
        Y: 0.31,
        shape: "rect",
        coords: [0.662, 0.305, 0.722, 0.321]
      }, {
        name: "market",
        index: 1,
        X: 0.622,
        Y: 0.795,
        shape: "rect",
        coords: [0.59, 0.794, 0.65, 0.806]
      }, {
        name: "market",
        index: 2,
        X: 0.602,
        Y: 0.813,
        shape: "rect",
        coords: [0.59, 0.81, 0.62, 0.83]
      }, {
        name: "car",
        index: 3,
        X: 0.571,
        Y: 0.811,
        shape: "rect",
        coords: [0.56, 0.81, 0.58, 0.815]
      }, {
        name: "market",
        index: 4,
        X: 0.555,
        Y: 0.827,
        shape: "rect",
        coords: [0.55, 0.82, 0.57, 0.84]
      }, {
        name: "post",
        index: 5,
        X: 0.881,
        Y: 0.664,
        shape: "rect",
        coords: [0.855, 0.655, 0.91, 0.70]
      }, {
        name: "school",
        index: 6,
        X: 0.472,
        Y: 0.182,
        shape: "rect",
        coords: [0.45, 0.07, 0.6, 0.24]
      }, {
        name: "schoolby",
        index: 1,
        X: 0.291,
        Y: 0.195,
        shape: "rect",
        coords: [0.284, 0.168, 0.432, 0.236]
      }, {
        name: "Mr.Chu",
        index: 1,
        X: 0.261,
        Y: 0.279,
        shape: "rect",
        coords: [0.234, 0.252, 0.286, 0.284]
      }, {
        name: "tian",
        index: 1,
        X: 0.523,
        Y: 0.35,
        shape: "rect",
        coords: [0.492, 0.34, 0.554, 0.356]
      }, {
        name: "bookwood",
        index: 1,
        X: 0.52,
        Y: 0.393,
        shape: "rect",
        coords: [0.481, 0.381, 0.555, 0.41]
      }, {
        name: "gate",
        index: 7,
        X: 0.621,
        Y: 0.04,
        shape: "rect",
        coords: [0.55, 0.02, 0.685, 0.055]
      }, {
        name: "library",
        index: 8,
        X: 0.524,
        Y: 0.301,
        shape: "rect",
        coords: [0.475, 0.28, 0.566, 0.317]
      }, {
        name: "sunLib",
        index: 9,
        X: 0.585,
        Y: 0.316,
        shape: "rect",
        coords: [0.569, 0.31, 0.60, 0.326]
      },
      // center 
      {
        name: "sqare",
        index: 1,
        X: 0.444,
        Y: 0.455,
        shape: "rect",
        coords: [0.422, 0.435, 0.483, 0.48]
      }, {
        name: "sqare",
        index: 2,
        X: 0.71,
        Y: 0.452,
        shape: "rect",
        coords: [0.628, 0.434, 0.733, 0.481]
      },
      // -----admin
      {
        name: "admin",
        index: 1,
        X: 0.562,
        Y: 0.46,
        shape: "rect",
        coords: [0.508, 0.445, 0.607, 0.466]
      }, {
        name: "admin",
        index: 2,
        X: 0.558,
        Y: 0.52,
        shape: "rect",
        coords: [0.531, 0.51, 0.591, 0.521]
      }, {
        name: "admin",
        index: 3,
        X: 0.581,
        Y: 0.495,
        shape: "rect",
        coords: [0.55, 0.487, 0.612, 0.503]
      },
      ],
      check: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  changePart = () => {
    const { part } = this.state
    this.setState({
      part: !part
    })
  }

  checkSite = (part, index) => {
    const { southlake, homeplace } = this.state
    if (part) {
      southlake.check[index] = !southlake.check[index];
      this.setState({
        southlake
      })
    } else {
      homeplace.check[index] = !homeplace.check[index];
      this.setState({
        homeplace
      })
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
    const { southlake, homeplace } = this.state
    let count = 0;
    for (let i of southlake.check) count += i;
    for (let i of homeplace.check) count += i;
    this.props.router('/honor', count);
  }

  render() {
    const { southlake, homeplace, part } = this.state
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
            check={southlake.check}
            prefix={southlake.prefix}
            places={southlake.places}
            checkSite={this.checkSite.bind(this)}
          />
          <Map
            className={"map-switch-con " + (!part ? "map-font" : "map-back")}
            baseOfTop={baseOfTop}
            part={false}
            device={device}
            check={homeplace.check}
            prefix={homeplace.prefix}
            places={homeplace.places}
            checkSite={this.checkSite.bind(this)}
          />
        </div>
        {/* commit */}
        <div
          className="commit-btn"
          onClick={this.commit.bind(this)}
          style={{ marginTop: -(btn.height + 50), ...btn }}
        ></div>
        <div className="ccnu" style={device}></div>
      </div>
    )
  }

}
