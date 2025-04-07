import React from 'react'
import './Landing.css'
import linkedin from './../../assets/linkedin.svg'
import github from './../../assets/github.svg'
import arrow1 from './../../assets/arrow1.svg'
import arrow2 from './../../assets/arrow2.svg'


const Landing = () => {
  return (
    <div className='landing'>
        <div className='info'>
            <h1>Front-End React Developer</h1>
            <p>Hello, I'm Mustafa. I'm a React developer with 2 years of experience. I enjoy building sites & apps. My focus is React (vite.js,Next.js).</p>
            <div>
              <i className='fas fa-mug-hot'></i>
            </div>
        </div>
        <div className="contact-btns">
          <button className='contact'>Contact me here
            <img src={arrow1} alt="" />
          </button>
          <button className='cv'>Download CV
            
            <img src={arrow2} alt="" />
             </button>
          <span>
            <img src={linkedin} alt="" />
          </span>
          <span>
            <img src={github} alt="" />
          </span>
        </div>
</div>
  )
}

export default Landing