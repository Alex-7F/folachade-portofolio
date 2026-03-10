"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
          Contact
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          {"Vous avez un projet en tête ? N'hésitez pas à me contacter"}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Restons en contact
              </h3>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/Alex-7F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-950 border border-gray-800 rounded-lg hover:border-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-gray-400 text-sm">@Alex-7F</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/folachade-alex-capo-chichi-4a562b333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-950 border border-gray-800 rounded-lg hover:border-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Folachadé Alex CAPO-CHICHI</p>
                  </div>
                </a>

                <a
                  href="mailto:capochichifolachadealex@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-950 border border-gray-800 rounded-lg hover:border-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400 text-sm">capochichifolachadealex@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black border border-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envoyez-moi un message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {"© "}{new Date().getFullYear()}{" Folachadé Alex CAPO-CHICHI. Tous droits réservés."}
          </p>
        </div>
      </div>
    </section>
  );
}
