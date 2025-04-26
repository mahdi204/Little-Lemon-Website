import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <img className='header-background-image' src="./untitled design.png" alt='iamge' />
            <div className='header-content'>
                <div className='header-left-side'>
                    <h1 className='header-title'>Little Lemon</h1>
                    <p className='header-description'>Chicago</p>
                    <p className='header-description-small'>We are a family-owned Mediterranean restaurant based in Chicago. At Little Lemon, we take pride in serving traditional recipes passed down through generations, with a fresh and modern twist. Our goal is to bring people together over delicious, heartwarming food in a cozy and welcoming space.</p>
                    <button className='header-button'>Reserve a Table</button>
                </div>
                <img className='header-image' src="restauranfood.jpg" alt='image' />

            </div>
        </header>

    )
}

export default Header