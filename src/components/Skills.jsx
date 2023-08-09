/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useRef } from "react";

import "../styles/skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../utils/styles";
import { Header } from "../utils/UtilityComponents";
import { svgTable } from "../utils/skillsSvgs";
import { motion } from "framer-motion";
import { ColorModeContext } from "../App";

const Skills = () => {
  const dark = useContext(ColorModeContext);
  gsap.registerPlugin(ScrollTrigger);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const sect = useRef();
  const cont = useRef();

  useEffect(() => {
    const transformSkills = (from) => {
      if (from) {
        cont.current.childNodes.forEach((skill, i) => {
          gsap.fromTo(
            skill,
            {
              opacity: 0,
              x: randomNumber(-500, 500),
              y: randomNumber(-500, 500),
              z: randomNumber(-500, 500),
              scale: 0.1,
              delay: i * 0.02,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              scale: 1,
            }
          );
        });
      } else {
        cont.current.childNodes.forEach((skill, i) => {
          gsap.to(skill, {
            opacity: 0,
            x: randomNumber(-500, 500),
            y: randomNumber(-500, 500),
            z: randomNumber(-500, 500),
            scale: 0.1,
            delay: i * 0.02,
          });
        });
      }
    };

    let ctx = gsap.context(() => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.create({
        trigger: sect.current,

        start: "top 10%",
        end: "bottom 50%",
        // markers: true,
        onEnter: () => {
          transformSkills(true);
        },
        onLeave: () => {
          transformSkills(false);
        },
        onEnterBack: () => {
          transformSkills(true);
        },
        onLeaveBack: () => {
          transformSkills(false);
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section
      className={`${styles.padding} max-w-7xl mx-auto relative w-full h-fit`}
      id="skills-section"
      ref={sect}
    >
      <Header text="Skills." dark={dark} />
      <motion.div
        className="skills w-full flex flex-wrap gap-10 items-center justify-center md:py-[10rem] xs:pt-[2rem]"
        ref={cont}
      >
        {svgTable(dark).map((svg, index) => (
          <div key={index} className="opacity-0">
            {svg}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
