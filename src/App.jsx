import About from "./components/About";
import Navbar from "./components/Navbar";
import PariclesComponent from "./components/ParticlesComponent";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { createContext, useEffect, useState } from "react";
import { Close } from "./utils/icons";

let color =
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
export const ColorModeContext = createContext()
const App = () => {
  const [pdfState, setPdfstate] = useState(false);
  const [gif, setGif] = useState(false);
  const [on, setOn] = useState(false);
  const [dark, setDark] = useState(true);
  

  const changeTheme = () => {
    setDark(!dark);
  };

  const play = (gif) => {
    setOn(!on);
    if (on) {
      setGif(gif);
    } else {
      setGif(false);
    }
  };

  useEffect(() => {}, [dark]);

  return (
    <div
      className={`relative z-0 ${
        dark ? "bg-darkbg" : "bg-daybg"
      } w-full h-full`}
    >
      <ColorModeContext.Provider value={dark}>
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-black/[90] ${
            gif ? "opacity-1 z-40" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`fixed  w-[80%] md:w-[50%] aspect-[16/9] top-[50%] left-[50%] bg-green-600 transform translate-x-[-50%] translate-y-[-50%] rounded-md hover:cursor-pointer ${
              gif ? "opacity-1 z-50" : "opacity-0 z-0"
            } ${gif} bg-[length:100%_100%]`}
          >
            <Close  onClose={() => play(false)} />
          </div>
        </div>

        <div className=" bg-green2  bg-no-repeat bg-center  z-500">
          <Navbar color={color} onSetDark={changeTheme} />
          <Hero />
          <PariclesComponent color={color} />
        </div>

        <About />
        <Skills />
        <Projects onPreview={play} />
        <Resume onLoad={(state) => setPdfstate(state)} />
        <Contact state={pdfState} />
      </ColorModeContext.Provider>
    </div>
  );
};

export default App;
