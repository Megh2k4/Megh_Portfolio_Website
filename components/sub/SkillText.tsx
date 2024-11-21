"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Register Autoplay
SwiperCore.use([Autoplay]);

const SkillData = [
  { name: "Html 5" },
  { name: "Css" },
  { name: "JavaScript" },
  { name: "Tailwind" },
  { name: "React" },
  { name: "Redux" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Framer" },
  { name: "Stripe" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "MySQL" },
  { name: "AWS" },
  { name: "Java" },
  { name: "C" },
  { name: "Kubernetes" },
  { name: "Jenkins" },
  { name: "Ansible" },
  { name: "Prometheus" },
  { name: "Haskell" },
];

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* Slider Section */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Skills
      </motion.div>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] max-w-[300px]" // Limit slider width
      >
        <div className="flex items-center justify-center mb-4">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 500, // Adjust delay for readability
            disableOnInteraction: false,
          }}
          speed={800} // Adjust speed for smoother transitions
          modules={[Autoplay]}
          className="text-center max-w-[250px] h-[40px] flex items-center justify-center" // Limit size and center items
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <h2 className="text-[#b49bff] text-3xl font-bold">{skill.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>


      {/* Subtitle Section */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Using the latest tech this world has to offer
      </motion.div>
    </div>
  );
};

export default SkillText;
