
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section text-center">
      <h2 className="section-title">Contact Me</h2>
      <form action="#" method="POST" className='text-left'>
      <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;