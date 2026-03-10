"use client";

import { ExternalLink, Github, Code2, Brain, Shield, Smartphone, Cloud, Cpu, Network } from "lucide-react";
import { projects as allProjects } from "@/data/projects";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Fullstack Web & Mobile":
      return <Smartphone className="w-5 h-5" />;
    case "AI & Algorithms":
      return <Brain className="w-5 h-5" />;
    case "Cybersecurity":
      return <Shield className="w-5 h-5" />;
    case "DevOps & Cloud":
      return <Cloud className="w-5 h-5" />;
    case "System & C++":
      return <Cpu className="w-5 h-5" />;
    case "System & Networking":
      return <Network className="w-5 h-5" />;
    default:
      return <Code2 className="w-5 h-5" />;
  }
};

const getCategoryGradient = (category: string) => {
  switch (category) {
    case "Fullstack Web & Mobile":
      return "from-blue-500 to-cyan-500";
    case "AI & Algorithms":
      return "from-purple-500 to-pink-500";
    case "Cybersecurity":
      return "from-red-500 to-orange-500";
    case "DevOps & Cloud":
      return "from-green-500 to-emerald-500";
    case "System & C++":
      return "from-yellow-500 to-orange-400";
    case "System & Networking":
      return "from-indigo-500 to-blue-500";
    default:
      return "from-gray-500 to-gray-700";
  }
};

const projects = allProjects;

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
          Mes Projets
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations les plus significatives
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const gradient = getCategoryGradient(project.category);
            const icon = getCategoryIcon(project.category);
            
            return (
              <div
                key={project.id}
                className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-blue-600 transition-all hover:scale-105 group"
              >
                <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-2 bg-gradient-to-r ${gradient} rounded-lg text-white`}>
                      {icon}
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 min-h-[80px] text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gray-900 text-gray-300 rounded-full border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs bg-gray-900 text-gray-500 rounded-full border border-gray-800">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
