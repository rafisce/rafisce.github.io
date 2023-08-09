import { useContext } from "react";
import { styles } from "../utils/styles";
import TextAnimation from "./TextAnimation";
import ModelCanvas from "./ThreeScene";
import { ColorModeContext } from "../App";

const Hero = () => {
  const dark = useContext(ColorModeContext);
  // const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight)
  // window.addEventListener('resize', () => {
  //   setAspectRatio(window.innerWidth / window.innerHeight)
  // })

  return (
    <section className={`relative w-full h-fit mx-auto z-30`} id="hero-section">
      <div
        className={`pt-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className={`w-5 h-5 rounded-full ${
              dark ? "bg-dark" : "bg-day"
            } mt-3`}
          />
          <div
            className={`w-1 sm:h-80 h-40 bg-gradient-to-b ${
              dark ? "from-dark" : "from-day"
            } to-transparent`}
          />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} ${
              dark ? " text-white" : " !text-dark"
            } overflow-hidden`}
          >
            Hi, I'm{" "}
            <span className={`text-${dark ? "dark" : "day"}`}>Rafi</span>
          </h1>
          <h1
            className={`${styles.heroHeadText}  ${
              dark ? " text-white" : " !text-dark"
            } text-white overflow-hidden`}
          >
            And im a&nbsp;
            <TextAnimation
              texts={[
                "Software Engineer",
                "Fullstack Developer",
                "Mobile Developer",
              ]}
              color="#915EFF"
            />
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 ${
              dark ? "text-white-100" : "text-dark"
            } block lg:mt-5 md:mt-7`}
          >
            I develop Full Stack Apps, Mobile <br className="sm:block hidden" />
            Apps and web applications
          </p>
        </div>
      </div>
      <div className={`bottom-0 w-full xs:h-[50vh] md:h-[70vh]`}>
        <ModelCanvas />
      </div>
    </section>
  );
};

export default Hero;
