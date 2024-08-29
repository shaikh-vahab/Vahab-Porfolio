import React from 'react';
import '../css/about.css';
import ProfileImage from '../..//public/Home-Dev.png'; // Ensure the path is correct for your image

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1>Hey, I'm Vahab 👋</h1>
          <p>
            I'm a frontend developer with a passion for creating engaging and user-friendly web experiences.
            With a solid foundation in HTML, CSS, JavaScript, & ReactJs. I enjoy bringing designs to life and building intuitive interfaces.
            During my journey as a developer, I've gained experience in working with modern frontend frameworks like React.js and
            have a good understanding of responsive web design principles. I'm constantly learning and exploring new technologies
            to enhance my skills.
          </p>
          <a
            href="/Vahab-shaikh-Frontend.pdf" // Correct path to your PDF
            download="Vahab_Resume.pdf"
          >
            <button className="download-cv-button">Download Vahab's CV  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2m-6-8l-2 2m0 0l-2-2m2 2V3"
              />
            </svg></button>
          </a>
        </div>
        <div className="about-info">
          <ul>
            <li><strong>Name:</strong> Vahab Shaikh</li>
            <li><strong>Age:</strong> 22</li>
            <li><strong>Email:</strong> Shaikhvahab97@gmail.com</li>
            <li><strong>Phone:</strong> +91 9175237382</li>
            <li><strong>Country:</strong> India</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
