import React from 'react';
import { MdPhone, MdLocationPin, MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin, FaGithub, FaSnapchat } from 'react-icons/fa';

const contactDetails = [
    {
        icon: <MdPhone size={48} className="text-purple-300" />,
        label: 'Phone',
        value: '+91 9168515339',
    },
    {
        icon: <MdLocationPin size={48} className="text-red-500" />,
        label: 'Address',
        value: 'House No.123, ABC Building, Pune-411057',
    },
    {
        icon: <IoLogoWhatsapp size={48} className="text-green-500" />,
        label: 'WhatsApp',
        value: '+91 9172392918',
    },
    {
        icon: <MdEmail size={48} className="text-gray-300" />,
        label: 'Email',
        value: 'nikita.choudhary3108@gmail.com',
    },
        {
        icon: <FaSnapchat size={48} className="text-yellow-300" />,
        label: 'Snapchat',
        value: 'nikita_311294',
    },
    {
        icon: <FaGithub size={48} className="text-gray-300" />,
        label: 'GitHub',
        value: 'github.com/Code-By-Nikita',
        link: 'https://github.com/Code-By-Nikita',
    },
    {
        icon: <FaLinkedin size={48} className="text-blue-700" />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/nikita-choudhary3194',
        link: 'https://www.linkedin.com/in/nikita-choudhary3194/',
    },

];

const Contact = () => {
    return (
        <section className="bg-black text-white py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-10 mt-8 font-roboto">Contact Me</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactDetails.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center shadow-md hover:bg-gray-800 transition"
                    >
                        {item.icon}
                        <span className="mt-4 font-semibold text-lg">{item.label}</span>
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-sm text-gray-300 hover:underline"
                            >
                                {item.value}
                            </a>
                        ) : (
                            <span className="mt-2 text-sm text-gray-300">{item.value}</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact;
