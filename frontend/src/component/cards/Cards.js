import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Materials!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.flaticon.com/premium-icon/icons/svg/377/377306.svg'
              text='description'
              label='HTML'
              path='/html-des'
            />
          <CardItem
              src='https://www.flaticon.com/premium-icon/icons/svg/2351/2351564.svg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='JAVASCRIPT'
              path='/js-des'
            />
            <CardItem
              src='https://www.flaticon.com/svg/static/icons/svg/977/977511.svg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='CSS'
              path='/css-des'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;