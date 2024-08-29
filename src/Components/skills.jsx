import React from 'react';
import '../css/skills.css';

const skills = [
  { name: 'HTML', level: '98%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'ReactJs', level: '75%' },
  { name: 'Tailwind CSS', level: '70%' },
  { name: 'GitHub', level: '80%' },
  { name: 'Nodejs', level: '80%' },
  { name: 'MongoDb', level: '80%' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: skill.level }}></div>
            </div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
