import React from 'react'
import './Home.scss'
import imageOne from '../../assets/f81735e6a14d136a57a7b18edbc20e2f@2x.png'
import Header from './Header'

export default function Home() {
  return (
    <div className='home'> 
      <Header />
      <div className='home-section-one'>
        <img src={imageOne} alt=""/>
      </div>
    </div>
  )
}
