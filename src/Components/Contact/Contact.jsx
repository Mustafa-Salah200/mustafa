import React from 'react'
import './Contact.css'
import send from '../../assets/send.svg'
const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <h1>Contact me</h1>
    <p>Please contact me directly at mustafaslahtoofy@gmail.com or through this form.</p>
    <form action="">
        <input type="text" placeholder='Your Email' />
        <textarea name="" id="" placeholder='Your message'></textarea>
        <div className="btn">

        <button>Submit

          <img src={send} alt="" />
        </button>
        </div>
    </form>
    </div>
  )
}

export default Contact