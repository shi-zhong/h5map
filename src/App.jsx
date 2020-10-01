import React, { Component } from 'react';
import './App.css'
import Home from './pages/Home/Home'
import MarkMap from './pages/Markmap/MarkMap'
import Honor from './pages/Honor/Honor'

import HomePart from './assets/homePart.jpg'
import SouthLake from './assets/SouthLake.png'

class App extends Component {

  state = {
    // router: "/markmap",
    router: "/home",
    // router: "/honor",
    device: {
      height: window.innerHeight,
      width: window.innerWidth
    },
    param: 0
  }

  componentDidMount() {

    // console.log("华中师范大学 %c木%c犀%c团%c队",'color:#e54d42','color:#f37b1d','color:#fbbd08','color:#8dc63f')
    window.onresize = () => {
      const mobileSet = {
        height: window.innerHeight,
        width: window.innerWidth
      }
      this.setState({
        device: mobileSet
      })
    }
  }

  router = (router = '/home', count = 0) => {
    this.setState({
      router: router,
      param: count,
    })
  }

  checkRouter = () => {
    const { router } = this.state
    const urls = [
      '/home',
      '/markmap',
      '/honor'
    ]
    for (let url of urls) {
      if (url === router) return true
    }
    return false
  }

  render() {
    const { router, device, param } = this.state
    return (
      <div>
        {router === '/home' && <Home device={device} router={this.router.bind(this)} />}
        {router === '/markmap' && <MarkMap device={device} router={this.router.bind(this)} />}
        {router === '/honor' && <Honor device={device} param={param} router={this.router.bind(this)} />}
        {!this.checkRouter() && <div>路由错误</div>}
        <img className="hide" src={HomePart} alt="homepart"/>
        <img className="hide" src={SouthLake} alt="southlake"/>
      </div>
    )
  }
}

export default App;
