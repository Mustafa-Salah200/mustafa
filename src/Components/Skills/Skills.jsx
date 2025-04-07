import React from 'react'
import './Skills.css'
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
                    return <div className='skill' key={skill}>{skill}</div>
                })
            }
        </div>
    </div>
  )
}

export default Skills