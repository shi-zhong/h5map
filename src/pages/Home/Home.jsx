import React, { Component } from 'react'
import Title from './title.png';
import './Home.css'

export default class Home extends Component {

  onRouter = () => {
    this.props.router('/markmap')
  }

  render() {
    const device = {
      height: window.innerHeight,
      width: window.innerWidth
    }

    return (
      <div
        style={device}
        className="home-body"
      >
        <div className="home-back" style={device}></div>
        <img className="home-title" width={device.width - 20} src={Title} alt="welcomeLogo" />
        <div className="start" onClick={this.onRouter.bind(this)}></div>
        <div className="dot-con">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    )
  }
}