import React from 'react'
import '../App.css'
import { Button } from './Button'
import './MainSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      <image src='/images/img-2.png'/>
      <h1>Making New Connections</h1>
      <p>Do you want to make new friends?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          How to use the app <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
