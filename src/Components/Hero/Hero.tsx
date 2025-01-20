import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>EngiNeed: For a Better and Safer Learning Space</h1>
        <p>
          This web application has been developed to enhance the quality of the
          learning environment for the students of Valenzuela City School of
          Mathematics and Science.
        </p>
        <button className="btn">
          Explore more <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero
