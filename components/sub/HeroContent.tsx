"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Typewriter } from "react-simple-typewriter";

import EarthCanvas from "../main/EarthCanvas";

const Bio = {
  name: "Megh Joshi",
  roles: [
    "Full Stack Developer",
    "Software Developer",
    "Research Assistant",
    "DevOps Engineer",
    "Data Analyst",
    "Programmer",
  ],
};

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full h-full z-[50] relative"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            <Typewriter
              words={Bio.roles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey there! I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Megh Joshi{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-2xl text-gray-400 my-5 max-w-[600px]"
        >
          I am a third-year Computer Science student at McMaster University with a boundless passion for coding, problem-solving, and transforming challenges into innovative solutions. Whether it is architecting scalable systems, fine-tuning algorithms, or mastering the art of DevOps to streamline development pipelines, I live for the thrill of creating something extraordinary from scratch.
          Outside the world of code, I&apos;m an adventurer at heart, often found hiking through nature&apos;s untamed beauty or diving into the vivid worlds of anime.
          Driven by curiosity and powered by innovation, I strive to leave a lasting impact wherever I go—whether it&apos;s building impactful projects, solving real-world problems, or empowering teams. I believe that with the right mindset and tools, there&apos;s no limit to what we can achieve.
        </motion.p>
        <div className="flex flex-row gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="https://drive.google.com/file/d/18nX0x0c7mnUKKkv10tTrh0aEOg4Dle08/view?usp=sharing" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-blue-500 font-bold shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Resume
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1.2)}
            href="https://www.linkedin.com/in/megh-joshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-green-500 font-bold shadow-md hover:bg-green-600 focus:outline-none"
          >
            LinkedIn
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1.2)}
            href="https://github.com/Megh2k4"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg bg-green-500 font-bold shadow-md hover:bg-green-600 focus:outline-none"
          >
            Github
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex justify-center items-center flex-1 overflow-visible relative"
        style={{ width: "50%", height: "50%" }}
      >
        <div
          style={{
            width: "1500px",
            height: "1500px",
            transform: "translate(250px, 100px)",
          }}
        >
          <EarthCanvas />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
