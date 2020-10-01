import React, { Component } from 'react'
import './Map.css'
import Area from '../Area/Area'
import Site from '../Site/Site'

import HomePart from '../../../assets/homePart.jpg';
import SouthLake from '../../../assets/SouthLake.png';

export default class Map extends Component {

  state = {
    touch: false,
    touchEvent: {
      finger: 0,
      preDis: 0,
    },
    mapContrl: {
      zoom: this.props.part ? 160 : 300,
    }
  }

  scroll = React.createRef()

  componentDidMount = () => {
    const img = this.calcImg()
    const { device } = this.props
    this.scroll.current.scrollTop = (img.height - device.height) / 2
    this.scroll.current.scrollLeft = (img.width - device.width) / 2
  }

  calcImg = () => {
    const { device: mobileSet, baseOfTop, part } = this.props
    const { mapContrl } = this.state
    const mb_WH = mobileSet.width / mobileSet.height
    const calc_WH = !part ? 7442 / 9425 : 3625 / 5334
    if (mb_WH < calc_WH) {
      return {
        width: (mobileSet.height - baseOfTop) * calc_WH * mapContrl.zoom * 0.01,
        height: (mobileSet.height - baseOfTop) * mapContrl.zoom * 0.01
      }
    } else {
      return {
        width: mobileSet.width * mapContrl.zoom * 0.01,
        height: mobileSet.width / calc_WH * mapContrl.zoom * 0.01
      }
    }
  }
  handleTouchStart = (e) => {
    let preTouchList = []
    let preDis = 0

    if (e.touches.length >= 3) return;

    // 拿出 touches [0-2]
    for (let i = 0; i <= 2; i++) {
      if (e.touches[i]) {
        preTouchList.push(e.touches[i])
      } else {
        break;
      }
    }

    // 多指计算 中心点 和 指间距离
    preDis = this.calDis(preTouchList)

    this.setState({
      touch: true,
      touchEvent: {
        finger: e.touches.length,
        preDis,
      }
    })
  }

  handleTouchMove = (e) => {
    const { touch, touchEvent, mapContrl } = this.state
    const { part } = this.props
    let preTouchList = []
    let preDis = 0

    if (!touch || e.touches.length >= 3) return;

    // 拿出 touches [0-2]
    for (let i = 0; i <= 2; i++) {
      if (e.touches[i]) {
        preTouchList.push(e.touches[i])
      } else {
        break;
      }
    }

    // 多指计算  指间距离
    preDis = this.calDis(preTouchList)

    // 先导参数计算完毕
    if (e.touches.length !== 1 && touchEvent.finger === e.touches.length) {
      // 200px => 100%   缩放 调整中心位置不变
      mapContrl.zoom = mapContrl.zoom + Math.round((preDis - touchEvent.preDis) * 100) / 200
      if (part) {
        mapContrl.zoom = (mapContrl.zoom > 100) ? mapContrl.zoom : 100
        mapContrl.zoom = (mapContrl.zoom < 200) ? mapContrl.zoom : 200
      } else {
        mapContrl.zoom = (mapContrl.zoom > 200) ? mapContrl.zoom : 200
        mapContrl.zoom = (mapContrl.zoom < 400) ? mapContrl.zoom : 400
      }
    }

    this.setState({
      touchEvent: {
        finger: e.touches.length,
        preDis,
      },
      mapContrl
    })

    e.stopPropagation();
  }
  handleTouchEnd = (e) => {
    this.setState({
      touch: false,
      touchEvent: {
        finger: 0,
        preDis: 0,
        preCenter: {
          X: 0,
          Y: 0
        }
      }
    })
  }
  calCenter = (nowTouchList) => {
    let X = 0, Y = 0;
    for (let nowTouch of nowTouchList) {
      X += nowTouch.clientX
      Y += nowTouch.clientY
    }

    return {
      X: X / nowTouchList.length,
      Y: Y / nowTouchList.length
    }
  }
  calDis = (nowTouchList) => {
    const length = nowTouchList.length;
    let dis = 0;
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        dis += Math.sqrt(Math.pow(nowTouchList[i].screenX - nowTouchList[j].screenX, 2) + Math.pow(nowTouchList[j].screenY - nowTouchList[i].screenY, 2))
      }
    }
    return Math.floor(dis)
  }

  render() {
    const { part, places, check, device, className, baseOfTop, prefix } = this.props
    const { mapContrl } = this.state
    const ImgInfo = this.calcImg()
    return (
      // 主框, 隐藏滚动条
      <div
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        onTouchCancel={this.handleTouchEnd.bind(this)}
        className={"outline " + className}
        style={{ height: device.height - baseOfTop, width: device.width }}
      >
        <div
          className="scroll-con"
          style={{ height: device.height - baseOfTop, width: device.width }}
          ref={this.scroll}
        >
          {/* 放置地图 */}
          <div
            className="map-con"
            style={{
              height: ImgInfo.height,
              width: ImgInfo.width,
            }}
          >
            {/* 图片 */}
            <div className="img-con">
              {!this.props.part
                ? <img className="mapimg" src={HomePart} alt="homePart" width={ImgInfo.width} useMap="#ccnumap" />
                : <img className="mapimg" src={SouthLake} alt="southlake" width={ImgInfo.width} useMap="#southlake" />
              }
              {/* 热区 */}
              <map name={this.props.part ? "southlake" : "ccnumap"}>
                {
                  places.map((place, index) => {
                    return <Area
                      key={place.name + place.index}
                      name={place.name}
                      index={place.index}
                      shape={place.shape}
                      coords={place.coords}
                      height={ImgInfo.height}
                      width={ImgInfo.width}
                      check={index}
                      part={this.props.part}
                      prefix={prefix}
                      onclick={this.props.checkSite}
                    />
                  })
                }
              </map>
            </div>
            {/* 标记 */}
            <div className="siteIndex" style={ImgInfo}>
              {
                places.map((place, index) => {
                  if (check[index]) {
                    return <Site
                      key={place.name + place.index}
                      part={part}
                      coords={place.coords}
                      height={ImgInfo.height}
                      width={ImgInfo.width}
                      zoom={mapContrl.zoom}
                      X={place.X}
                      Y={place.Y}
                    />
                  }
                })
              }
            </div>
          </div>
        </div>
      </div >
    )
  }
}