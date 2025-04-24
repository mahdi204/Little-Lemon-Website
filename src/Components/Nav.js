import React from 'react'

const Nav = () => {
    return (
        <nav>
            <div><p>Hi</p></div>
            <ul>
                <li className='hover:text-gray-400 cursor-pointer'>Home</li>
                <li className='hover:text-gray-400 cursor-pointer'>About</li>
                <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav