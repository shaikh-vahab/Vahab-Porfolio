import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../css/about.css';
import ProfileImage from '../..//public/Home-Dev.png'; // Ensure the path is correct for your image

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1>Hey, I'm Vahab 💻 </h1>
          <h2 className='Developer'>

            I'm a  <Typewriter
              words={['Frontend Developer  ...!', 'UI/UX Designer ...!', 'Web Developer ...!', 'ReactJs Developer ...!', 'Node.js Developer ...!', 'MERN Developer ...!']}
              loop={5} // Change this to adjust the number of loops
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </h2>
          <p>
          As a passionate developer, I specialize in creating engaging and user-friendly web experiences. I have a solid foundation in HTML, CSS, JavaScript, and React.js, and I enjoy transforming designs into functional, intuitive interfaces. My experience extends to the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, allowing me to build full-stack applications seamlessly.
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
            <li><strong>Email:</strong> Shaikhvahab97@gmail.com</li>
            <li><strong>Phone:</strong> +91 9175237382</li>
            <li><strong>Country:</strong> India</li>
           
            <li><strong>Qualification:</strong> B.sc (Science)</li>
            <li><strong>Address:</strong> Nanded MH</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
