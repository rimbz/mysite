import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header= () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rim Bziouich</h1>
        <h5 className="text-light">SOFTWARE ENGINEER</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt='me'/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header