import React from 'react';
import {
  FaCss3,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  RiTailwindCssFill,
} from 'react-icons/ri';
import {
  BsBootstrap,
  BsGithub,
  BsFire,
} from 'react-icons/bs';
import { VscAzureDevops } from 'react-icons/vsc';
import { FaCode } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaCode className="text-rose-400" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-sky-500" /> },
    { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-400" /> },
    { name: 'React JS', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Lit', icon: <BsFire className="text-orange-400" /> },
    { name: 'Bootstrap', icon: <BsBootstrap className="text-purple-500" /> },
    { name: 'GitHub', icon: <BsGithub className="text-white" /> },
    { name: 'Tailwind', icon: <RiTailwindCssFill className="text-cyan-500" /> },
    { name: 'Node JS', icon: <FaNodeJs className="text-green-500" /> },
     { name: 'Azure', icon: <VscAzureDevops className="text-blue-500" /> },
    
    
  ];

  return (
    <section className="bg-black py-10">
      <h2 className="text-white text-3xl font-bold font-roboto text-center mb-8 mt-10">My Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 text-white">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 bg-gray-800 p-4 rounded shadow hover:bg-gray-700 transition"
          >
            <div className="text-3xl">{skill.icon}</div>
            <p className="text-sm text-center font-roboto">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
