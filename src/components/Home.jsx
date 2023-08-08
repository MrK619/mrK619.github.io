import React from "react";
import cloud from "../assets/clouds.png";
import hero from "../assets/hero.svg";
import { motion } from "framer-motion";
import hero2 from "../assets/hero3.png";
import Logo from "./logos";

const home = () => {
  return (
    <div
      style={{ backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }}
    >
      <main className="lg:flex lg:max-w-[90%] md:max-w-[90%] md:flex sm:max-w-[80%] top-16 h-[100vh] w-full mt-[70px] justify-between content-center m-auto max-w-[80%] ">
        <div className="lg:w-[50%] sm:[100%]">
          <div className="lg:text-6xl font-extrabold pt-[230px] md:text-5xl  text-5xl">
            Hi, I am Karthik
          </div>
          <br />
          <div className="text-3xl font-extralight pb-2">
            Feel free to connect with me.
          </div>
          <Logo />
        </div>
        <div className="w-[50%] pt-[120px] pl-5 max-[767px]:hidden">
          <motion.img
            src={hero}
            initial={{ y: 100 }}
            animate={{ y: 0, transition: { type: "spring" } }}
            className="lg:w-[500px] lg:h-[500px]  max-[767px]:hidden md:w-[350px] md:h-[350px] "
          ></motion.img>
          {/* <img src={hero} alt="" width={500} height={500} /> */}
        </div>
      </main>
    </div>
  );
};

export default home;
