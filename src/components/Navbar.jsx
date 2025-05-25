import React from 'react';
import '../style/style.css';

const Navbar = () => {
  return (
    <nav className="shadow-md w-full bg-[linear-gradient(to_right,_#500724,_#4a044e,_#500724)] text-white font-roboto fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <ul className="flex justify-end space-x-6 list-none">
          <li><a href="#about" className="hover:text-yellow-200">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-200">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-200">Skills</a></li>
          <li><a href="#experience" className="hover:text-yellow-200">Experience</a></li>
          <li><a href="#contact" className="hover:text-yellow-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
