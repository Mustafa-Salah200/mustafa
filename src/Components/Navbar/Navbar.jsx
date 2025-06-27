import React from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <nav>
        <motion.h2
        //  initial={{opacity:0,scale:0}}
        //  animate={{opacity:1,scale:1}}
        //  transition={{duration:0.3}}
        >Mustafa.dev</motion.h2>
        <ul className='nav'>
          <motion.li className='nav-item'
          // initial={{opacity:0,scale:0}}
          // animate={{opacity:1,scale:1}}
          // transition={{delay:.3,duration:0.3}}
          ><a className='link' href='#'>Home</a></motion.li>
          <motion.li className='nav-item'
          // initial={{opacity:0,scale:0}}
          // animate={{opacity:1,scale:1}}
          // transition={{delay:0.6,duration:0.3}}
          ><a className='link' href='#about'>About</a></motion.li>
          <motion.li className='nav-item'
          // initial={{opacity:0,scale:0}}
          // animate={{opacity:1,scale:1}}
          // transition={{delay:.9,duration:0.3}}
          ><a className='link' href='#project'>Project</a></motion.li>
          <motion.li className='nav-item'
          // initial={{opacity:0,scale:0}}
          // animate={{opacity:1,scale:1}}
          // transition={{delay:1.2,duration:0.3}}
          ><a className='link' href='#contact'>Contact</a></motion.li>
        </ul>
    </nav>
  )
}

export default Navbar