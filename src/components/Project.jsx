import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'Weather-update-app',
      description: 'Shows real-time weather updates and forecasts for any location with an easy-to-use interface.',
      github: 'https://github.com/Code-By-Nikita/weather-update-app',
      demo: 'https://code-by-nikita.github.io/weather-update-app',
    },
    {
      name: 'Nikita-portfolio-app',
      description: 'Personal website showcasing skills, projects, experience, and contact info with a clean, responsive design.',
      github: 'https://github.com/Code-By-Nikita/nikita-portfolio-app',
      demo: 'https://code-by-nikita.github.io/nikita-portfolio-app',
    },
    {
      name: 'The-indori-namkeen',
      description: 'E-commerce app for browsing, ordering, and tracking delivery of snacks online. Currently in development phase.',
      github: 'https://github.com/Code-By-Nikita/the-indori-namkeen',
      demo: 'https://code-by-nikita.github.io/the-indori-namkeen',
    },
    {
      name: 'Punch-art-diaries',
      description: 'Online marketplace for buying and selling handmade craft products with user profiles and secure payments. Currently in development phase.',
      github: 'https://github.com/Code-By-Nikita/punch-art-diaries',
      demo: 'https://code-by-nikita.github.io/punch-art-diaries',
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 mt-10 font-roboto">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-teal-400 font-roboto">{project.name}</h3>
            <p className="text-sm mb-4 font-roboto">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-lime-100 hover:underline"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sky-400 hover:underline"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
