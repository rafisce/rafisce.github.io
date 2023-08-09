import { useContext, useRef } from "react";
import { styles } from "../utils/styles";
// import ProjectCard from "./ProjectCard";

import { projects } from "../utils/constants";
import { Header } from "../utils/UtilityComponents";
import { motion } from "framer-motion";
import { ColorModeContext } from "../App";
import {  Github, Preview } from "../utils/icons";

const Projects = ({ onPreview}) => {
  const main = useRef();
  const dark = useContext(ColorModeContext);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <motion.section
      id="projects-section"
      ref={main}
      className={`${styles.padding}  max-w-7xl mx-auto relative projects max-h-fit`}
    >
      <div className="absolute w-full h-full flex items-center justify-center top-[8%] left-0"></div>
      <Header text="Projects." dark={dark} />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 pt-[5rem] place-items-strech"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onPlay={onPreview}
            index={index}
            dark={dark}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

const ProjectCard = ({ project, onPlay, dark }) => {
  const previewClass = `flex opacity-0 transition-opacity duration-[0.2s] group-hover:delay-[0.3s]  font-bold group-hover:opacity-100 text-[1.6rem] group-hover:cursor-pointer ${
    dark ? "group-hover:text-dark" : "group-hover:text-day"
  }`;
  const item = {
    hidden: { opacity: 0, x: -100, y: 20 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={item}
      className={`project group h-[375px] rounded-md  relative overflow-hidden  ${
        dark ? "bg-white/10" : "bg-dark/40"
      } backdrop-blur-[15px] ${
        dark ? "border-white/20" : "bg-dark/20"
      } border-solid border-[1px] hover:z-35 hover:backdrop-blur-0`}
    >
      <div
        className={`absolute  h-full w-full left-0 group-hover:left-[100%] transition-all duration-[.3s] ease-in-out p-5 ${
          dark ? "text-white" : "text-day"
        }`}
      >
        <h1 className="text-[1.8rem]">{project.name}</h1>
        <p>{project.details}</p>
        <div className="flex py-3"></div>
      </div>
      <div className={`h-full w-full flex items-center justify-center `}>
        {project.link ? (
          <a className={previewClass} href={project.link}>
            <Preview />
            &nbsp;&nbsp;{`Click To Play 🎮`}
          </a>
        ) : (
          <div className={previewClass} onClick={() => onPlay(project.gif)}>
            <Preview />
            &nbsp;&nbsp;{`Click To Preview!`}
          </div>
        )}
      </div>
      <a href={project.repo} className="mx-2 text-green-400 ">
        <Github />
      </a>
     
    </motion.div>
  );
};



export default Projects;
