import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/discord.webp"
          title="PyBot: The ultimate discord bot for everyday needs"
          description="An intelligent multipurpose bot using Python, designed to enhance productivity. 
          Implemented a player ranking algorithm, and stored the data in an optimized SQL 
          database. Added APIs for external integrations, enabling seamless interaction with third-party services."
        />
        <ProjectCard
          src="/vibevault.webp"
          title="VibeVault: A fun and interactive networking app"
          description="A full-stack networking application using ReactJS, Tailwind CSS, and Appwrite, enabling authenticated
          users to create, update, delete, and edit posts. Engineered a Jenkins CI/CD pipeline, and deployed the 
          application on AWS EKS using Kubernetes, improving scalability and reliability."
        />
        <ProjectCard
          src="/prome.webp"
          title="Monitoring and Visualization for Kubernetes based application on Grafana with metrics on Prometheus"
          description="A robust monitoring and visualization system for a kubernetes based application using Prometheus, Grafana, and
          cAdvisor, incrementing the system performance and operational efficiency. Designed and deployed scalable monitoring systems, insightful 
          dashboards, and analysis of containerized environments"
        />
      </div>
    </div>

  );
};

export default Projects;
