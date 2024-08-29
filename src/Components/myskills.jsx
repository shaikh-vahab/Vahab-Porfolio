import React, { useState } from 'react';
import '../css/myskills.css'

const skillsData = {
  HTML: {
    title: "HTML",
    description: "Proficient in writing clean, semantic HTML code for structuring content on the web. Experienced in creating accessible and SEO-friendly layouts, integrating multimedia elements, and using modern HTML5 features.",
    icon: '..//../public/Html.png', // Replace with your icon path
  },
  CSS: {
    title: "CSS",
    description: "Skilled in crafting responsive and visually appealing designs using CSS. Proficient in Flexbox, Grid, and CSS animations. Experienced in using CSS preprocessors like SASS for scalable and maintainable stylesheets.",
    icon: "..//../public/Css.png", // Replace with your icon path
  },
  JavaScript: {
    title: "JavaScript",
    description: "Experienced in developing dynamic and interactive web applications using JavaScript. Proficient in ES6+ features, DOM manipulation, event handling, and working with APIs for client-side scripting.",
    icon: "..//../public/javascript.png", // Replace with your icon path
  },
  ReactJs: {
    title: "ReactJs",
    description: "Proficient in building single-page applications using React. Experienced in managing state with hooks, creating reusable components, and optimizing performance through best practices.",
    icon: "..//../public/ReactJs.png", // Replace with your icon path
  },
  Bootstrap: {
    title: "Bootstrap",
    description: "Experienced in rapidly developing responsive and mobile-first websites using Bootstrap. Skilled in customizing Bootstrap components and extending its styles to fit project-specific needs.",
    icon: "..//../public/botsrap.webp", // Replace with your icon path
  },
  NodeJs: {
    title: "NodeJs",
    description: "Proficient in building scalable server-side applications using Node.js. Experienced in working with Express.js, handling asynchronous operations, and interacting with databases through Node.js.",
    icon: "..//../public/nodeJs.png", // Replace with your icon path
  },
  MongoDb: {
    title: "MongoDb",
    description: "Experienced in managing NoSQL databases using MongoDB. Proficient in designing schemas, performing CRUD operations, and optimizing queries for efficient data retrieval and storage.",
    icon: "..//../public/mongodb.png", // Replace with your icon path
  },
  TalwindCss: {
    title: "TalwindCss",
    description: "Skilled in using Tailwind CSS for rapid UI development. Proficient in utility-first CSS for creating responsive designs, customizing themes, and maintaining consistency across projects.",
    icon: "..//../public/talwindcss.png", // Replace with your icon path
  },
  // Add more skills if needed
};


const MySkills = () => {
  const [activeSkill, setActiveSkill] = useState("HTML");

  const renderSkillContent = () => {
    const skill = skillsData[activeSkill];
    return (
      <div className="skill-content">
        <hr /> <br />
        <h2>{skill.title}</h2>
        <p>{skill.description}</p>
        <img src={skill.icon} alt={`${skill.title} icon`} className="skill-icon" />

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
