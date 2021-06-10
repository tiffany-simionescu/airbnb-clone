import React from 'react'
import CardContainer from '../containers/CardContainer';
import '../styles/Home.css';
import Banner from './Banner';

function Home() {
  return (
    <div className="home">
      <Banner />
      <CardContainer />
    </div>
  )
}

export default Home
