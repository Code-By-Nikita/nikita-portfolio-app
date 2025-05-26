import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer Main Section */}
      <div className="bg-[linear-gradient(to_right,_#500724,_#4a044e,_#500724)] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10 md:flex-row md:items-start md:justify-between md:text-left">

          {/* About Column */}
          <div className="flex-1 px-4">
            <h3 className="text-xl font-bold mb-4 font-roboto text-center">More about myself</h3>
            <p className="text-sm leading-relaxed font-roboto text-center">
              I’m originally from Indore and have been living in Pune for the past 8 years, which has become a second home to me. Outside of work, I enjoy creative and calming activities like cooking, dancing, reading, and making punch needle art products. I also follow a vegan lifestyle, which reflects my values around mindful and ethical living. On the professional side, I love collaborating with other developers—it not only sharpens my skills but also gives me fresh perspectives. I’m always eager to learn, whether it’s a new framework, a better way to solve a problem, or just understanding how others think and build. I'm especially passionate about building things that make a difference and enjoy being part of a community that supports growth and creativity. ✨
            </p>
          </div>

          {/* Follow Us Column */}
          <div className="flex-1 px-4 flex flex-col items-center md:items-center text-center">
            <h3 className="text-xl font-bold mb-4 font-roboto">Follow Us</h3>
            <ul className="space-y-2 text-sm font-roboto">
              <li>
                <a href="https://facebook.com" className="flex items-center justify-center gap-2 hover:text-yellow-200">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/punch_art_diaries/" className="flex items-center justify-center gap-2 hover:text-yellow-200">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://snapchat.com" className="flex items-center justify-center gap-2 hover:text-yellow-200">
                  <FaSnapchat /> Snapchat
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nikita-choudhary3194/" className="flex items-center justify-center gap-2 hover:text-yellow-200">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Code-By-Nikita" className="flex items-center justify-center gap-2 hover:text-yellow-200 font-weight-medium">
                  <FaGithub /> GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="flex-1 px-4">
            <h3 className="text-xl font-bold mb-4 font-roboto text-center">Contact Us</h3>
            <ul className="space-y-2 text-sm font-roboto">
              <li>
                <a href="mailto:nikita.choudhary3108@gmail.com" className="flex items-center justify-center gap-2 hover:text-yellow-200 font-weight-semibold">
                  <FaEnvelope /> Email: nikita.choudhary3108@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918120198220" className="flex items-center justify-center gap-2 hover:text-yellow-200 font-weight-semibold">
                  <FaPhoneAlt /> Phone: 9168515339
                </a>
              </li>
              <li>
                <a href="https://t.me/yourtelegram" className="flex items-center justify-center gap-2 hover:text-yellow-200 font-weight-semibold">
                  <FaTelegramPlane /> Telegram: Nikita_Choudhary
                </a>
              </li>
              <li>
                <a href="https://wa.me/918847761997" className="flex items-center justify-center gap-2 hover:text-yellow-200 font-weight-semibold">
                  <FaWhatsapp /> WhatsApp: 9172392918
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-white text-center py-4 text-sm">
        &copy; 2024 Nikita Choudhary | Code-By-Nikita | Nikita-Portfolio-App | All rights reserved
      </div>
    </>
  );
};

export default Footer;
