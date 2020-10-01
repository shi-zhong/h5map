import React, { Component } from 'react'
import './Switch.css'

export default class SwitchBt extends Component {

  handleClick = (e) => {
    this.props.onclick()
    e.stopPropagation()
  }

  render() {
    const { part } = this.props
    return (
      <div
        className="switch-con"
      >
        <div onClick={this.handleClick.bind(this)} className={"place-con " + (!part ? "switch-font" : "switch-back")}>桂子山校区</div>
        <div onClick={this.handleClick.bind(this)} className={"place-con " + (part ? "switch-font" : "switch-back")}>南湖校区</div>
      </div>
    )
  }
}