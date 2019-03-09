import React from 'react'
import './Header.scss'
import logo from '../../assets/Flower.png'
import brand from '../../assets/Group 3.png'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-branding'>
            <img className='header-logo' src={logo} alt="logo"/>
            <img className='header-brand' src={brand} alt="brand"/>
        </div>
        <div></div>
    </div>
  )
}
