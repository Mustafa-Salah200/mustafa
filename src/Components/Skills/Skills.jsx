import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
const Skills = () => {
    const skills = ["HTML",
"CSS",
"JavaScript",
"TypeScript",
"React",
"Next.js",
"Node.js",
"Git",
"Github",
"Prisma",
"MongoDB",
"Redux",
"Express",
"Framer Motion",
"OpenAi"]

  return (
    <div className='skills'>
        <h1>My skills</h1>
        <div className="skills-box">
            {
                skills.map(skill=>{
                    return <motion.div className='skill' key={skill}
                    initial={{y: "100px",scale:0.6}}
                    whileInView={{y:"0",scale:1}}
                    transition={{duration: 0.6}}
                    >{skill}</motion.div>
                })
            }
        </div>
    </div>
  )
}


export default Skills