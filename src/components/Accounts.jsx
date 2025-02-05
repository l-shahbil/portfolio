import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const accounts = [
  { name: "LinkedIn", link: "https://www.linkedin.com", icon: <FaLinkedin size={30} /> },
  { name: "GitHub", link: "https://github.com/l-shahbil", icon: <FaGithub size={30} /> },
  { name: "Twitter", link: "https://twitter.com", icon: <FaTwitter size={30} /> },
];

const Accounts = () => {
  return (
      <div className="flex justify-center gap-6 mx-auto md:flex-col">
        {accounts.map((account, index) => (
          <a
            key={index}
            href={account.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon p-4 bg-gray-800 text-white rounded-full hover:bg-primary transition duration-300"
          >
            {account.icon}
          </a>
        ))}
      </div>
  );
};

export default Accounts;
