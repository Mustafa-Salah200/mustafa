import React, { useState } from 'react'
import './Contact.css'
import send from '../../assets/send.svg'
const Contact = () => {
  const [clicked,setClicked] = useState(false)
  const [action,setAction] = useState({
    text: "",
    content: ""
  })
  const HandleSubmit = ()=>{
    console.log(action.text.trim() !== "")
    console.log("submit")
    console.log("text: ",action.text)
    console.log("content: ",action.content)
  }
  return (
    <div className='contact-section' id='contact'>
      <h1>Contact me</h1>
    <p>Please contact me directly at 
      <a href="mailto:mustafaslahtoofy@gmail.com?subject=Hire ME&body=">mustafaslahtoofy@gmail.com</a>
      
       or through this form.</p>
    <form action={`mailto:${action.text}?subject=Hire ME&body=${action.content}`}>
        <input type="text" placeholder='Your Email' onChange={(e)=> setAction({...action,text:e.target.value})}/>
        <textarea name="" id="" placeholder='Your message'  onChange={(e)=> setAction({...action,content:e.target.value})}></textarea>
        <div className="btn">

        <button 
        style={action.text.trim() === "" || action.content.trim() === "" ?{
          backgroundColor: "#7777",
          cursor: "not-allowed"
        } : {cursor: "pointer"}}
        disabled={action.text.trim() === "" || action.content.trim() === ""} onClick={HandleSubmit}>Submit

          <img src={send} alt="" />
        </button>
        </div>
    </form>
    </div>
  )
}

export default Contact