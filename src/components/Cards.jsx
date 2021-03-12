import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import photo_1 from "../images/img-9.jpg"
import photo_2 from "../images/img-2.jpg"
import photo_3 from "../images/img-5.jpg"
import photo_4 from "../images/img-6.jpg"
import photo_5 from "../images/img-7.jpg"

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the new way for FUN!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
         <ul className="cards__item">
          <CardItem 
            src={photo_1}
            text="Report Bad Customers"
            label='Travel'
            path='/services'
          />
          <CardItem
              src={photo_2}
              text="Share your know-how "
              label='Love'
              path='/services'
          />  
        </ul>
        
          <ul className="cards__item">
            <CardItem
              src={photo_3}
              text="Say something"
              label='Fun time'
              path='/services'
            />
            <CardItem
              src={photo_4}
              text="Market Place"
              label='Romantic'
              path='/services'
            />
            <CardItem
              src={photo_5}
              text="Jobs"
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
