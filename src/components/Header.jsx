import { useState } from "react";
import React from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../assets/logo1.png"
const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "#",
  },
 
];
const name = "< karthik />";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <nav className="w-[100%] border-2 h-[70px] content-center font-sans font-semibold drop-shadow-lg fixed top-0 bg-white">
      <div className="flex justify-between max-w-[95%] m-auto ">
        <div className=" flex pb-2">
          <img src={logo1} alt="" width={55} height={55} className="pt-2"/>
          <a href="/" className="pt-5 font-mono text-lg">
          
            {'Karthik R'}
            
            </a>
        </div>
        <div className="max-sm:hidden pt-2.5">
          <ul className="flex space-x-[50px] ">
            {links.map((el) => (
              <li className="cursor-pointer">
                <Link
                  to={el.to}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    "hover:bg-[#49D0F1] text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setOpen(false)}
                >
                  {el.name}
                </Link>
              </li>
            ))}

            {/* <li className="border-2  py-2  px-3 border-none rounded-lg hover:bg-[#3B82F6] drop-shadow-none ">
              About
            </li>
            <li className="border-2  py-2  px-3  border-none  rounded-lg hover:bg-[#3B82F6] drop-shadow-none">
              Contact
            </li> */}
          </ul>
        </div>
        <div className="sm:hidden">
          <div className="sm:hidden pt-2">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={30}
            duration={0.5}
          />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0, transition: { type: "spring" } }}
                exit={{ x: 200, transition: { type: "spring" } }}
                className={
                  "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                }
              >
                <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
                  {links.map((el) => (
                    <Link
                      to={el.route}
                      activeClass={"text-white bg-blue-500"}
                      className={
                        "hover:bg-[#49D0F1] text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                      }
                      spy={true}
                      smooth={true}
                      onClick={() => setOpen(false)}
                    >
                      <li>{el.name}</li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
