
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-darkBg text-lightText mx-auto container xl:w-[90%]">
        <Hero />
        <Skills />
        <section id="projects" className="section">
          <h2 className="section-title">My Projects</h2>
          <div className="grid-layout">
            <ProjectCard title="Dojo Helpdisk" description="Dojo Helpdisk is a user-friendly helpdesk solution designed to streamline support requests and ensure prompt resolutions for customer issues." link="https://dojo-helpdisk.vercel.app/" image={"./images/dojoHelpdisk.png"} />
            <ProjectCard title="Recipes" description="Recipes is a simple and intuitive platform where you can discover, share, and save delicious recipes from around the world. Whether you're a beginner or a seasoned chef, you'll find easy-to-follow recipes for every occasion." link="https://food-recipe-snowy.vercel.app/" image={"./images/Recipes.png"} />
            <ProjectCard title="Workout Budy" description="Workout Buddy is your personal fitness companion, designed to help you track workouts, set fitness goals, and stay motivated. Whether you're just starting your fitness journey or looking to challenge yourself, Workout Buddy provides customized routines and progress tracking to keep you on track." link="https://workout-buddy-laith.vercel.app/" image={"./images/workoutBudy.png"} />
          </div>
        </section>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;