import React from 'react'
import "../styles/CardContainer.css";
import Card from '../components/Card';
import cardData from '../data/cardData.json';

function CardContainer() {
  return (
    <>
    <div className="cardContainer">
      {cardData.slice(0, 3).map(item => (
        <Card 
          key={item.id}
          src={item.src} 
          title={item.title} 
          description={item.description} 
          price={item.price} 
        />
      ))}
    </div>
    <div className="cardContainer">
      {cardData.slice(3, 6).map(item => (
        <Card 
          key={item.id}
          src={item.src} 
          title={item.title} 
          description={item.description} 
          price={item.price} 
        />
      ))}
    </div>
    </>
  )
}

export default CardContainer
