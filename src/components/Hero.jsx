import React from 'react';
import NikitaPhoto from '../../public/assets/images/nikita-photo.jpg'; // Update path accordingly

const Hero = () => {
  return (
    <section className="bg-black text-white w-full py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl sm-text-4xl font-weight-100 font-lobster mb-4 mt-4 text-shadow-lg text-shadow-yellow-200">Nikita Choudhary</h1>
          <h2 className="text-fuchsia-700 text-xl md:text-xl sm:text-lg font-roboto mb-4 text-shadow-lg"> FRONTEND DEVELOPER</h2>
          <p className="text-lg font-normal text-gray-300 font-roboto text-shadow-lg">
            Seasoned Frontend Developer with over 8+ years of experience. Specialized in building secure, scalable and user
centric web apps for Bank customers using HTML, CSS, JavaScript, React Js & Web-Components.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={NikitaPhoto}
            alt="Nikita Choudhary Profile Pic"
            className="w-[380px] h-[380px] rounded-full border-4 border-white border-dashed shadow-lg bg-[linear-gradient(to_right,_#500724,_#4a044e,_#500724)] mt-10"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
