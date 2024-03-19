import React from 'react'
import './hero.css';

const Hero = () => {

    const handleClick = () => {
        console.log(`I was clicked`)
    }
  return (
    <div className='hero'>
      <p>Zainaab must be a hero</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Hero
