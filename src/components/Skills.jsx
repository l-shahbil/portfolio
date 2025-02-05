import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiDotnet } from 'react-icons/si'; 

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'JavaScript', icon: <FaJs size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> }, // Next.js
  { name: 'Tailwind CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'Git', icon: <FaGitAlt size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'ASP.NET Core', icon: <SiDotnet size={40} /> }, // ASP.NET Core
];

const Skills = () => {
  return (
    <section id="skills" className="section text-center py-16 hover">
      <h2 className="section-title text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card"
          >
            <div className="flex justify-center mb-4 text-primary">
              {skill.icon}
            </div>
            <h3 className="text-lightText text-xl font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
