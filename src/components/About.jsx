import { useContext } from "react";
import { styles } from "../utils/styles";
import { Header } from "../utils/UtilityComponents";
import { ColorModeContext } from "../App";

const About = () => {
  const dark = useContext(ColorModeContext);
  return (
    <section
      className={`${styles.padding} max-w-7xl mx-auto relative z-350`}
      id="about-section"
    >
      <div>
        <p
          className={
            styles.sectionSubText + ` ${dark ? "text-white" : "text-day"}`
          }
        >
          Introduction
        </p>
        <Header text="Overview." dark={dark} />
      </div>

      <p
        // variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 ${
          dark ? "text-secondary" : "text-day"
        } text-[19px] max-w-3xl leading-[30px]`}
      >
        I'm a FullStack focused Software Engineer. I have the motivation that drives me to do
        my best and challenge myself daily in order to learn new skills that
        help me do a better job. I am results-oriented, constantly checking in to
        determine where I stand regarding where I'm aiming to be in order to get
        the best result. I like exploring and increasing my knowledge and skills
        to improve myself.
      </p>
    </section>
  );
};

export default About;
