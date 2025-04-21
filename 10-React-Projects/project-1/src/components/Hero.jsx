import React from 'react'

const Hero = () => {
  return (
    <>
    <main className='hero container'>
        <div className='hero-content'>
            <h1>Your feet deserve the best</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugit consequuntur! Voluptatum suscipit distinctio dolores quas ut voluptas mollitia voluptatem maxime neque aliquam, dicta praesentium nihil nesciunt facere eaque odio?</p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div
            className='shopping'>
                <p>Also Available on</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src="/images/shoe_image.png" alt="hero" />
        </div>
    </main>
    </>
  )
}

export default Hero