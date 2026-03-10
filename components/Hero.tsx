"use client";

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-black"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Folachadé Alex
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              CAPO-CHICHI
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Ingénieur Logiciel
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {"Je conçois des écosystèmes numériques performants au croisement du "}<span className="text-blue-400 font-semibold">Développement Fullstack</span>{", de l'"}<span className="text-blue-400 font-semibold">Intelligence Artificielle</span>{" et de la "}<span className="text-blue-400 font-semibold">Cybersécurité</span>.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/Alex-7F"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/folachade-alex-capo-chichi-4a562b333"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:capochichifolachadealex@gmail.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition-all"
          >
            Découvrir mes projets
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-500" />
        </div>
      </div>
    </section>
  );
}
