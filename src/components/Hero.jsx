import React from "react";
import Accounts from "./Accounts";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 bg-lightBg text-darkText">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Main Text Section */}
        <div className="col-span-2 text-left">
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-4">
            Hello web developer,
          </h1>
          <h2 className="text-4xl md:text-9xl font-extrabold">
            I'm Laith
            <sup className="text-lightText">*</sup>
          </h2>
          <p className="text-lg mt-4 w-full">
          I'm Laith, a Computer Engineer and Backend Developer specializing in building dynamic web applications using PHP and Laravel. I have extensive experience in understanding client requirements and translating them into code to add new features or modify existing products. I focus on building scalable and high-performance backend systems, with an emphasis on performance optimization and writing clean, efficient code.
          </p>
            <a href="#contact">
          <button className="btn btn-primary mt-6 text-lg px-8 py-4">
            Contact me
            </button>
            </a>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col justify-center items-end text-right space-y-4">
         <Accounts />
        </div>
      </div>

      {/* Footnote */}
    </section>
  );
};

export default Hero;