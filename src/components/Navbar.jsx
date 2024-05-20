import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='logo'>
                <p>LOGO</p>
                <span><button className='btn'>Login</button>
                    <button className='btn signup'>Signup</button></span>
            </div>

            <div className='nav'>
                <nav>
                    <ul>
                        <li>Overview</li>
                        <li>Testimonials</li>
                        <li>Refund</li>
                        <li>Testimonials</li>
                    </ul>
                    <div className='line'></div>
                </nav>
            </div>
        </>
    )
}

export default Navbar