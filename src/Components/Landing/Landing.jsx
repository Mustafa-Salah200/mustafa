import React from 'react'
import linkedin from './../../assets/linkedin.svg'
import github from './../../assets/github.svg'
import arrow1 from './../../assets/arrow2.svg'
import arrow2 from './../../assets/arrow1.svg'
import pdf from './../../assets/pdf/mustafa.pdf'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './Landing.css'


const Landing = () => {
  return (
    <div className='landing'>
        <div className='info'>
            <h1
            >Front-End React Developer</h1>
            <p

            >Hello, I'm Mustafa. I'm a React developer with 2 years of experience. I enjoy building sites & apps. My focus is React (vite.js,Next.js).</p>
            <div>
              <i className='fas fa-mug-hot'></i>
            </div>
        </div>
        <div className="contact-btns">
          <motion.button className='contact'
                    whileHover={{scale:1.1}}
          >Contact me here
            <img src={arrow1} alt="" />
          </motion.button>
          <motion.button className='cv'
          whileHover={{scale:1.1}}
          >
            <a href={pdf} download
            >Download CV

            <img src={arrow2} alt="" />
            </a>
             </motion.button>
          <motion.a

          whileHover={{scale:1.1}}
          href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ftoofy954%2F%3Figsh%3DMWUxMGlqYWF1aW5qdg%253D%253D&is_from_rle'
          >
            <img src={linkedin} alt="" />
          </motion.a>
          <motion.a
                    whileHover={{scale:1.1}}
                    href='https://github.com/Mustafa-Salah200'
          >
            <img src={github} alt="" />
          </motion.a>
        </div>
</div>
  )
}

export default Landing