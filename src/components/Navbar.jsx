import { useContext, useEffect, useState } from "react";
import { Theme } from "../utils/icons";
import { navLinks } from "../utils/constants";
import { ColorModeContext } from "../App";


const Navbar = ({ color ,onSetDark}) => {
  const [show, setShow] = useState(false);
  const [small, setSmall] = useState(window.innerWidth < 640);
  const dark =useContext(ColorModeContext)


  window.addEventListener("resize", () => {
    if (window.innerWidth > 639) {
      setSmall(false);
      setShow(false);
    } else {
      setSmall(true);
    }
  });

  useEffect(() => {}, [show, small]);
  return (
    <nav
      className={`w-full h-[70px] flex items-center fixed xs:transition-all xs:duration-[0.5s] ${
        show ? "xs:bg-darkbg/75" : "xs:bg-darkbg/0"
      }   py-5 top-0 z-50 bg-gradient-to-r from-transparent to-black/10  xs:h-fit `}
    >
      <div
        className="flex flex-col h-[30px] justify-between items-end px-5 sm:hidden absolute top-[30px] right-[20px] hover:cursor-pointer "
        onClick={() => setShow(!show)}
      >
        <span className="bg-dark h-[3px] w-[40px] block rounded-sm" />
        <span className="bg-dark h-[3px] w-[40px] block rounded-sm" />
        <span className="bg-dark h-[3px] w-[40px] block rounded-sm" />
      </div>
      <div className="w-full flex justify-end items-center mx-auto sm:pr-[5rem] ">
        <ul
          className={`list flex flex-col xs:w-full xs:h-0 xs:transition-all xs:duration-[0.5s] ${
            show ? "xs:h-[294.1px]" : ""
          } sm:w-auto sm:flex sm:flex-row sm:gap-5 list-none sm:mt-0 mt-[5rem] sm:h-auto overflow-hidden`}
        >
          {navLinks.map((link, index) => (
            <li
              onClick={() => {
                setShow(false);
              }}
              key={index}
              className={`font-poppins font-medium cursor-pointer text-[16px] xs:p-3 xs:w-full xs:h-full text-center my-auto xs:hover:bg-dark/20 sm:hover:bg-transparent`}
            >
              <a
                href={`#${link.id}-section`}
                className={`${dark ? "text-white" : " xs:text-white sm:text-day"}`}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li
            className="flex items-center justify-center hover:cursor-pointer hover:bg-dark/20 p-3"
            onClick={() => {
              setShow(false);
              onSetDark();
            }}
          >
            <Theme color={color} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
