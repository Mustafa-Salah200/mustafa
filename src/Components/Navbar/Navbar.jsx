import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <h4>Mustafa.dev</h4>
        <ul className='nav'>
          <li className='nav-item'><a className='link' href='#'>Home</a></li>
          <li className='nav-item'><a className='link' href='#about'>About</a></li>
          <li className='nav-item'><a className='link' href='#project'>Project</a></li>
          <li className='nav-item'><a className='link' href='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar