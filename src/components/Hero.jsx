import React from 'react';
import NikitaPhoto from '../../public/assets/images/nikita-photo.jpg'; // Update path accordingly

const Hero = () => {
  return (
    <section className="bg-black text-white w-full py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Name with responsive font and margin */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-lobster mb-4 mt-6 sm:mt-4 text-shadow-lg text-shadow-yellow-200">
            Nikita Choudhary
          </h1>

          {/* Title */}
          <h2 className="text-fuchsia-700 text-lg sm:text-xl md:text-xl font-roboto mb-4 text-shadow-lg">
            FRONTEND DEVELOPER
          </h2>

          {/* Description with smaller font on mobile */}
          <p className="text-sm sm:text-base md:text-lg font-normal text-gray-300 font-roboto text-shadow-lg">
            Seasoned Frontend Developer with over 8+ years of experience. Specialized in building secure, scalable and user-centric web apps for Bank customers using HTML, CSS, JavaScript, React Js & Web-Components.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={NikitaPhoto}
            alt="Nikita Choudhary Profile Pic"
            className="w-[280px] sm:w-[320px] md:w-[380px] h-[280px] sm:h-[320px] md:h-[380px] rounded-full border-4 border-white border-dashed shadow-lg bg-[linear-gradient(to_right,_#500724,_#4a044e,_#500724)] mt-8 md:mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
