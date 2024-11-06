import React, { Component } from 'react'
import Logo from './logo2.png'
import Bub from './bubble.png'

class Welcome extends Component {
  render() {
    return (
      <div className='welcome'>
        <div className='box1'>
            <img  src={Logo} alt='' className='logo'/>
            <button type='button'> Sign in </button>
        </div>
        <div className='title'>
          <p>Welcome to my portfolio </p>
          <h1>Shaik <br/>Mohammad Ravuf</h1>
          <button type='button'> Take A Tour</button>
        </div>
        <div className='bubbles'>
          <img src={Bub} alt=''/>
          <img src={Bub} alt=''/>
          <img src={Bub} alt=''/>
          <img src={Bub} alt=''/>
          <img src={Bub} alt=''/>
          <img src={Bub} alt=''/>
          <img src={Bub} alt=''/>
        </div>
      </div>
    )
  }
}

export default Welcome