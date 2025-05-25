import React from 'react';
import companyLogo from '../../public/assets/images/company-logo.png';
import projectLogo from '../../public/assets/images/project-logo.png';

const Experience = () => {
    const experiences = [
        {
            title: 'Graduate Trainee',
            years: '2016 - 2018',
            location: 'Trivandrum/Pune, India',
            company: 'Tata Consultancy Services',
            companyLogo,
        },
        {
            title: 'Assistant System Engineer',
            years: '2018 - 2020',
            location: 'Mumbai, India',
            company: 'Tata Consultancy Services',
            companyLogo,
        },
        {
            title: 'System Engineer',
            years: '2020 - 2022',
            location: 'Remote, India',
            company: 'Tata Consultancy Services',
            companyLogo,
        },
        {
            title: 'IT Analyst',
            years: '2022 - Present',
            location: 'Pune, India',
            company: 'Tata Consultancy Services',
            companyLogo,
        },
    ];

    return (
        <section className="bg-black text-white py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-10 mt-10 font-roboto">Professional Experience</h2>

            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Experience Entries with company logo only */}
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md hover:bg-gray-700 transition">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            {/* Company Logo */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={exp.companyLogo}
                                    alt="Company Logo"
                                    className="w-16 h-16 object-contain rounded-full border-2 border-blue-400 bg-white"
                                />
                                <span className="text-sm text-blue-400 font-roboto">{exp.company}</span>
                            </div>

                            {/* Role Info */}
                            <div className="text-left md:text-right">
                                <h3 className="text-xl font-semibold font-roboto">{exp.title}</h3>
                                <p className="text-sm text-gray-300 font-roboto">{exp.years}</p>
                                <p className="text-sm text-gray-400 italic font-roboto">{exp.location}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* ING Bank Project Descriptions with project logo */}
                <div className="flex flex-col items-center mt-10">
                    <img
                        src={projectLogo}
                        alt="Project Logo"
                        className="w-24 h-24 object-contain rounded-full border-2 border-orange-400 bg-white"
                    />
                    <span className="mt-2 text-sm text-center font-roboto text-orange-400">ING Bank</span>
                </div>

                <div className="mt-6 bg-gray-800 rounded-lg p-6 shadow-md hover:bg-gray-700 transition">
                    <h3 className="text-xl font-semibold mb-2 text-orange-400">ING Bank, Belgium (Competent Engineer-III)</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Currently working as a Frontend Developer for ING Bank, Belgium,
                        using modern technologies such as Lit HTML, Web-Components,
                        and unit testing frameworks like Mocha & Chai to develop secure
                        and scalable banking interfaces. Actively contributing to Agile
                        development processes, implementing best practices in version
                        control using Git. Also using Azure Repo and Azure Pipeline for
                        CICD.
                    </p>
                </div>

                <div className="mt-6 bg-gray-800 rounded-lg p-6 shadow-md hover:bg-gray-700 transition">
                    <h3 className="text-xl font-semibold mb-2 text-orange-400">ING Bank, Netherlands (Advance Engineer-II)</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Worked as a UI Developer for ING Bank, Netherlands, responsible for
                        building responsive and user-friendly web applications using HTML,
                        CSS, JavaScript, React JS, Bootstrap, and Git. Collaborated within
                        Agile teams to design and maintain various banking modules,
                        focusing on cross-browser compatibility and clean, reusable UI
                        components that enhanced the overall user experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
