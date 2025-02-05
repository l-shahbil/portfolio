import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="card bg-gray-800 shadow-md rounded-md overflow-hidden hover:shadow-xl transition duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      )}
      <div className="p-6 text-center">
        <h3 className="card-title text-xl font-bold text-white mb-4">{title}</h3>
        <p className="card-description text-sm text-gray-400 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
