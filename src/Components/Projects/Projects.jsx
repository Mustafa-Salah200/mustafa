import dan from "../../assets/projects/p2.png";
import emergencies from "../../assets/projects/p5.png";
import files_management from "../../assets/projects/p8.png";
import quiz_app from "../../assets/projects/p9.png";
import ui_ux_Profile from "../../assets/projects/p10.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const porjects = [
    {
      id:1,
      title:"Dan Academy",
      description:"A Dan Academy website designed for university students would primarily function as a comprehensive online learning and development platform",
      skills:["HTML","CSS","JAVASCRIPT","REACT"],
      image:"dan.png"
    },
    {
      id:1,
      title:"Emergencies App",
      description:"This app is designed to facilitate immediate, localized assistance among users in critical emergency situations, especially when professional emergency services might face delays or ...",
      skills:["HTML","CSS","JAVASCRIPT","REACT","SASS","NODE.JS","MOONGO.DB","EXPRESS"],
      image:"emergencies.png"
    },
    {
      id:1,
      title:"Files Management",
      description:"This app is a user-friendly file management application.This app provides an intuitive platform where you can easily create, organize, and manage your files and folders.",
      skills:["HTML","CSS","JAVASCRIPT","REACT","SASS","REDUX"],
      image:"files_management.png"
    },
    {
      id:1,
      title:"Quize App",
      description:"dynamic quiz application designed to test your knowledge across various subjects and question formats. ",
      skills:["HTML","CSS","JAVASCRIPT","REACT","REDUX","FIRE BASE"],
      image:"quiz_app.png"
    },
    {
      id:1,
      title:"UI/UX Profile",
      description:"This app is an online resume. that show your skills and project",
      skills:["HTML","CSS","JAVASCRIPT","REACT","FREAMER MOTION"],
      image:"ui_ux_profile.png"
    },
  ]
  return (
    <div id="project" className="projects">
      <div className="top">
        <h1>PORTFOLIO</h1>
        <p>Each project is a unique piece of development</p>
      </div>

      <div className="projects-box">
        <Project2 image={dan} data={porjects[0]}/>
        <Project image={emergencies} data={porjects[1]}/>
        <Project2 image={files_management} data={porjects[2]}/>
        <Project image={quiz_app} data={porjects[3]}/>
        <Project2 image={ui_ux_Profile} data={porjects[4]}/>
      </div>

      <div className="show_more">
        <motion.button whileHover={{ scaleX: 1.2 }}>Show More</motion.button>
      </div>
    </div>
  );
};

export default Projects;

const Project = ({ image,data }) => {
  return (
    <motion.div
      className="project"
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <div className="right">
        <h1>{data.title}</h1>
        <p>
          {data.description}
        </p>
        <div className="project-skills">
          {data.skills.map(ele =>{
            return <span key={ele}>{ele}</span>
          })}
        </div>
      </div>
      <div className="left">
        <img src={image} alt="" />
      </div>
    </motion.div>
  );
};
const Project2 = ({ image ,data }) => {
  return (
    <motion.div
      className="project"
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <div className="left">
        <img className="image-revers" src={image} alt="" />
      </div>
      <div className="right">
        <h1>{data.title}</h1>
        <p>
          {data.description}
        </p>
        <div className="project-skills">
        {data.skills.map(ele =>{
            return <span key={ele}>{ele}</span>
          })}
        </div>
      </div>
    </motion.div>
  );
};
