'use client';

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";

interface ExperienceProps {
  experiences: {
    title: string;
    company_name: string;
    date: string;
    icon: string;
    iconBg: string;
    points: string[];
    skills: string[];
  }[];
}

const ExperienceCard: React.FC<{ experience: ExperienceProps["experiences"][0] }> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[85%] h-[82%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <h4 className="text-gray-400 text-[16px] font-bold">Skills:</h4>
        <ul className="list-disc ml-5 space-y-2">
          {experience.skills.map((skill, index) => (
            <li
              key={`skill-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const { ref, inView } = useSectionInView(0.5);

  return (
    <section id="experience" className="py-10" ref={ref}>
      <motion.div
        className={`text-center ${inView ? "opacity-100" : "opacity-50"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-400 text-lg"></p>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Work Experience
      </h1></motion.div>

      <div className="mt-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
