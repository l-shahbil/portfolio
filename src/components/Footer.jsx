import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const accounts = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/laith-shahbil-a8bb13281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin size={20} /> },
    { name: "GitHub", link: "https://github.com/l-shahbil", icon: <FaGithub size={20} /> },
    { name: "Twitter", link: "https://x.com/l_shahbil?t=ALHSI9DDyl4EYB2Oi-ymIg&s=08", icon: <FaTwitter size={20} /> },
  ];

  return (
    <footer className="bg-[#102748] text-lightText py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* القسم الأول: النص */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.
        </p>

        {/* القسم الثاني: الحسابات الاجتماعية */}
        <div className="flex justify-center gap-6 mt-4 md:mt-0">
          {accounts.map((account, index) => (
            <a
              key={index}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-primary  transition duration-300 shadow-md"
              aria-label={account.name}
            >
              {account.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
