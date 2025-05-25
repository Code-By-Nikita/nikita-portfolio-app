import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'Weather-update-app',
      description: 'This is a React-based application demonstrating core concepts like state, props, and component lifecycle.',
      github: 'https://github.com/yourusername/project-1',
      demo: 'https://your-demo-link.com/project-1',
    },
    {
      name: 'Nikita-portfolio-app',
      description: 'A modern single-page application using React Router and custom hooks for routing and logic handling.',
      github: 'https://github.com/yourusername/project-2',
      demo: 'https://your-demo-link.com/project-2',
    },
    {
      name: 'The-indori-namkeen',
      description: 'This project integrates third-party APIs into a React app with responsive UI and data visualization.',
      github: 'https://github.com/yourusername/project-3',
      demo: 'https://your-demo-link.com/project-3',
    },
    {
      name: 'Punch-art-diaries',
      description: 'A dashboard application with authentication, theming, and local storage using React and Tailwind CSS.',
      github: 'https://github.com/yourusername/project-4',
      demo: 'https://your-demo-link.com/project-4',
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
