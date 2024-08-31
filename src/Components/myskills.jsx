import React, { useState } from 'react';
import '../css/myskills.css';

const skillsData = {
  HTML: {
    title: "HTML",
    description: "Proficient in writing clean, semantic HTML code for structuring content on the web. Experienced in creating accessible and SEO-friendly layouts, integrating multimedia elements, and using modern HTML5 features.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512" fill="#E34F26">
        <path d="M0 0h512l-24 256-48 192H24L0 0zm90.56 380h107.44l9.88-96H100.68l-10.12 96zM161.04 278h123.76l9.88-96H170.92l-9.88 96zm182.56 102h107.44l9.88-96H343.6l-10.12 96zm-68.56-184h80l-10.12 96h-80l10.12-96z"/>
      </svg>
    ),
  },
  CSS: {
    title: "CSS",
    description: "Skilled in crafting responsive and visually appealing designs using CSS. Proficient in Flexbox, Grid, and CSS animations. Experienced in using CSS preprocessors like SASS for scalable and maintainable stylesheets.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="#1572B6">
        <path d="M1.5 0h21l-1.5 22.5h-18L1.5 0zm3.6 18h5.4l.6-6h-6l-.6 6zm8.4-11h-7.2l-.6 6h7.2l.6-6zm2.4 0v6h4.2l.6-6h-4.2zM1.5 0v18h21V0H1.5z"/>
      </svg>
    ),
  },
  JavaScript: {
    title: "JavaScript",
    description: "Experienced in developing dynamic and interactive web applications using JavaScript. Proficient in ES6+ features, DOM manipulation, event handling, and working with APIs for client-side scripting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm12 12h-2v-2h2v2zm0 2h-2v2h2v-2zm6-4c0-3.31-2.69-6-6-6s-6 2.69-6 6v2h2v-2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4h-2v2h2c3.31 0 6-2.69 6-6z"/>
      </svg>
    ),
  },
  ReactJs: {
    title: "ReactJs",
    description: "Proficient in building single-page applications using React. Experienced in managing state with hooks, creating reusable components, and optimizing performance through best practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" fill="#61DAFB">
        <path d="M32 0C8.4 0 0 8.4 0 32s8.4 32 32 32 32-8.4 32-32S55.6 0 32 0zm0 60C15.9 60 4 48.1 4 32S15.9 4 32 4s28 11.9 28 28-11.9 28-28 28zm-1-39c-6.5 0-12 5.5-12 12s5.5 12 12 12 12-5.5 12-12-5.5-12-12-12zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
      </svg>
    ),
  },
  Bootstrap: {
    title: "Bootstrap",
    description: "Experienced in rapidly developing responsive and mobile-first websites using Bootstrap. Skilled in customizing Bootstrap components and extending its styles to fit project-specific needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 30 30" fill="#563D7C">
        <path d="M0 15c0-8.284 6.716-15 15-15s15 6.716 15 15-6.716 15-15 15S0 23.284 0 15zm4.5 0c0 5.846 4.5 10.5 10.5 10.5S25.5 20.846 25.5 15 21 4.5 15 4.5 4.5 9.154 4.5 15zM16.5 20.664V18h-3v2.664c-.88.422-1.884.664-3 .664-3.31 0-6-2.69-6-6s2.69-6 6-6c1.116 0 2.12.242 3 .664V12h3v1.336c.88-.422 1.884-.664 3-.664 3.31 0 6 2.69 6 6s-2.69 6-6 6c-1.116 0-2.12-.242-3-.664z"/>
      </svg>
    ),
  },
  NodeJs: {
    title: "NodeJs",
    description: "Proficient in building scalable server-side applications using Node.js. Experienced in working with Express.js, handling asynchronous operations, and interacting with databases through Node.js.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" fill="#68A063">
        <path d="M32 0C14.4 0 0 14.4 0 32c0 17.6 14.4 32 32 32 17.6 0 32-14.4 32-32C64 14.4 49.6 0 32 0zm10.4 42.4c-1.6 1.6-3.6 2.4-5.6 2.4-4.8 0-8.8-3.2-8.8-8.8V28.8h5.6v5.6c0 1.6 1.2 2.4 2.4 2.4 1.6 0 2.4-1.2 2.4-2.4v-5.6h5.6v6.4c0 4 1.6 7.2 4 9.6l-2.4 2.4zm-20-5.6h-5.6V28h5.6v8.8zm18.4-13.6h-8v-8h8v8z"/>
      </svg>
    ),
  },
  MongoDb: {
    title: "MongoDb",
    description: "Experienced in managing NoSQL databases using MongoDB. Proficient in designing schemas, performing CRUD operations, and optimizing queries for efficient data retrieval and storage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="#4DB33D">
        <path d="M12 0C8.4 0 5.4 2.4 4.8 5.6 3.6 8.4 2.4 11.2 2.4 14.4c0 6 4.8 11.4 11.4 11.4 6 0 11.4-4.8 11.4-11.4S18 0 12 0zm-.6 19.2c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6c3.6 0 6.6 3 6.6 6.6s-3 6.6-6.6 6.6zm0-15.6c-1.2 0-2.4.6-3.6 1.8-1.2 1.2-1.8 2.4-1.8 3.6 0 1.2.6 2.4 1.8 3.6 1.2 1.2 2.4 1.8 3.6 1.8 1.2 0 2.4-.6 3.6-1.8 1.2-1.2 1.8-2.4 1.8-3.6 0-1.2-.6-2.4-1.8-3.6-1.2-1.2-2.4-1.8-3.6-1.8zm0 3.6c.6 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.6-1.2-1.2.6-1.2 1.2-1.2z"/>
      </svg>
    ),
  },
  TailwindCss: {
    title: "TailwindCss",
    description: "Skilled in using Tailwind CSS for rapid UI development. Proficient in utility-first CSS for creating responsive designs, customizing themes, and maintaining consistency across projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" fill="#06B6D4">
        <path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm10.4 43.2l-4.8 5.6-3.2-3.2 4.8-5.6 3.2 3.2zm-10.4-28c-1.6 0-3.2.4-4.8 1.6l-4.8-4.8C26.4 10 29.6 9.6 32 9.6c6.4 0 11.2 4.8 11.2 11.2s-4.8 11.2-11.2 11.2c-1.6 0-3.2-.4-4.8-1.6l-4.8 4.8c1.6 1.6 4 2.4 6.4 2.4 7.2 0 12.8-5.6 12.8-12.8S38.4 10.4 32 10.4z"/>
      </svg>
    ),
  },
};

const MySkills = () => {
  const [activeSkill, setActiveSkill] = useState("HTML");

  const renderSkillContent = () => {
    const skill = skillsData[activeSkill];
    return (
      <div className="skill-content">
        <hr /> <br />
        {skill.icon}
        <h2>{skill.title}</h2>
        <p>{skill.description}</p>
      </div>
    );
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-list">
          {Object.keys(skillsData).map((skill) => (
            <div
              key={skill}
              className={`skill-item ${activeSkill === skill ? 'active' : ''}`}
              onClick={() => setActiveSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="skills-details">
          {renderSkillContent()}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
