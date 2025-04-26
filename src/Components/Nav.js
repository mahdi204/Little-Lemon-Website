import React from 'react'

const Nav = () => {
    return (
        <nav>
            <div><p>Logo</p></div>
            <ul className='nav-ul'>
                <li className="home-li"><a href=''>Home</a></li>
                <li className="about-li"><a href=''>About</a></li>
                <li className="Contact-li"><a href=''>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav