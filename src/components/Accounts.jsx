import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const accounts = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/laith-shahbil-a8bb13281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin size={30} /> },
  { name: "GitHub", link: "https://github.com/l-shahbil", icon: <FaGithub size={30} /> },
  { name: "Twitter", link: "https://x.com/l_shahbil?t=ALHSI9DDyl4EYB2Oi-ymIg&s=08", icon: <FaTwitter size={30} /> },
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
