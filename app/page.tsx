import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Experience from "@/components/main/Experience";
import Contact from "@/components/main/Contact";


const  experiences = [
  {
    title: "Research Assistant",
    company_name: "IBM Canada",
    icon: "/ibm.png", // Assuming you have an icon for Google Developer Student Club
    iconBg: "#F0F0F0", // Placeholder color, change as needed
    date: "Oct 2024 - Present",
    points: [
      "Developed key modules for the IBM compiler in Haskell, which efficiently compiles both Z-series and POWER mainframes.",
      "Actively involved in enhancing the functionality of the IBM POWER library by developing and optimizing new functions, resulting in improved performance and expanded capabilities for IBM's hardware products.",
      "Led the development IBM's MASS (Mathematical Acceleration Subsystem) library, contributing significantly to the implementation of advanced techniques to ensure precise estimation of function outputs.",
      "Engineered and integrated advanced activation functions like SiLU, and GeLU, improving the library's performance"
    ],
    skills: ["Haskell", "C",  "Mathematical optimization", "Teamwork", "Agile Methodologies", "Collaboration"]
  },
  {
    title: "Software Developer",
    company_name: "McMaster AI Society",
    icon: "/AIlogo.png", // Assuming you have an icon for 4Pillar Global Technology
    iconBg: "#E6EFFF", // Placeholder color, change as needed
    date: "Sep 2023 - April 2024",
    points: [
      "Developed \"MacChat bot\" an AI-driven solution for McMaster University that automated user query handling, reducing the need for human agents",
      "Automated data scraping tasks to collect and process large datasets, to gather data for bot, ultimately improving data collection efficiency and streamlining analysis.",
      "Utilized PyTorch and various NLP techniques to develop a model for understanding and responding to user queries, resulting in a reduction in response time"
    ],
    skills: ["HTML", "CSS", "Javascript", "Python", "Data Scraping", "PyTorch", "Problem Solving"]
  },
  
  {
    title: "Housing Assistant",
    company_name: "McMaster Housing and Conference Services",
    icon: "McMaster_University_logo.svg.png", // Assuming you have an icon for Zenit Excelencia
    iconBg: "#DDEEFF", // Placeholder color, change as needed
    date: "Sep 2023 - Apr 2024",
    points: [
      "Oversaw hospitality services and check-ins for 200+ guests, optimizing processes to ensure seamless accommodation transitions.",
      "Coordinated the dispatch of over 500 packages, improving efficiency",
      "Provided support to nearly 4000 students residing in 13 buildings, addressing their needs and concerns."
    ],
    skills: ["Teamwork", "Communication", "Microsoft Excel", "Problem Solving", "Microsoft Word", "Teams"]
  }
];



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Experience experiences={experiences}/>
        <Encryption />
        <Projects />
        <section className="relative z-10 flex items-center justify-center py-10text-white">
            <Contact />
        </section>

      </div>
    </main>
  );
}
