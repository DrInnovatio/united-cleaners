import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the new way for FUN!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
         <ul className="cards__item">
          <CardItem 
            src="images/img-9.jpg"
            text="Travel with new friends"
            label='Travel'
            path='/services'
          />
            <CardItem
              src="images/img-2.jpg"
              text="Boy friend or Girl friend"
              label='Love'
              path='/services'
            />
        </ul>
        
          <ul className="cards__item">
            <CardItem
              src="images/img-5.jpg"
              text="Have fun with new friends"
              label='Fun time'
              path='/services'
            />
            <CardItem
              src="images/img-6.jpg"
              text="Love is all around."
              label='Romantic'
              path='/services'
            />
            <CardItem
              src="images/img-7.jpg"
              text="Socializing is an adventure."
              label='Adventure'
              path='/services'
            />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
