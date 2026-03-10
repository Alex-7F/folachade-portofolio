"use client";

import { Code2, Brain, Shield, Globe, Smartphone, Database, Lock, Cpu, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Web & Mobile",
    icon: <Globe size={28} />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Next.js", icon: <Code2 size={18} />, level: 95 },
      { name: "React Native", icon: <Smartphone size={18} />, level: 90 },
      { name: "Django", icon: <Database size={18} />, level: 88 },
      { name: "TypeScript", icon: <Code2 size={18} />, level: 92 },
      { name: "PostgreSQL", icon: <Database size={18} />, level: 85 },
      { name: "REST API", icon: <Globe size={18} />, level: 93 },
    ],
  },
  {
    title: "Intelligence Artificielle",
    icon: <Brain size={28} />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Deep Learning from Scratch", icon: <Brain size={18} />, level: 90 },
      { name: "Python", icon: <Terminal size={18} />, level: 95 },
      { name: "Neural Networks", icon: <Cpu size={18} />, level: 88 },
      { name: "Machine Learning", icon: <Brain size={18} />, level: 87 },
      { name: "NumPy & Algorithmes", icon: <Code2 size={18} />, level: 90 },
      { name: "TensorFlow", icon: <Cpu size={18} />, level: 80 },
    ],
  },
  {
    title: "Cybersécurité",
    icon: <Shield size={28} />,
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "Pentesting", icon: <Terminal size={18} />, level: 85 },
      { name: "OWASP Top 10", icon: <Shield size={18} />, level: 90 },
      { name: "Cryptographie", icon: <Lock size={18} />, level: 88 },
      { name: "Kali Linux", icon: <Terminal size={18} />, level: 82 },
      { name: "Burp Suite", icon: <Shield size={18} />, level: 80 },
      { name: "Metasploit", icon: <Terminal size={18} />, level: 78 },
    ],
  },
];

const technologies = [
  { name: "Next.js", color: "bg-black border-2 border-white" },
  { name: "React Native", color: "bg-blue-500" },
  { name: "Django", color: "bg-green-700" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "Deep Learning", color: "bg-purple-600" },
  { name: "Pentesting", color: "bg-red-600" },
  { name: "OWASP", color: "bg-orange-600" },
  { name: "Cryptographie", color: "bg-red-700" },
  { name: "TypeScript", color: "bg-blue-400" },
  { name: "PostgreSQL", color: "bg-blue-700" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
          Compétences
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Expertise technique au croisement de trois domaines clés
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`px-5 py-2.5 ${tech.color} text-white text-sm font-semibold rounded-full hover:scale-110 transition-transform shadow-lg`}
            >
              {tech.name}
            </div>
          ))}
        </div>

        {/* Skill Categories - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">{skill.icon}</span>
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
