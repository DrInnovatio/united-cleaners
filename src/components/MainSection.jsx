import React from 'react'
import '../App.css'
import { Button } from './Button'
import './MainSection.css'

function MainSection () {
  return (
    
    <div className='hero-container' >
      
      <h3>Being united is the right and the power.</h3>
      <p>You always deserve to be treated as a professional.</p>
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

export default MainSection
