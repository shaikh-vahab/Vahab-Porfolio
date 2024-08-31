import React from 'react';
import '../css/project.css'

const projects = [
  {
    title: 'MMH Project',
    description: 'It Is Provide Goverment Yojna For Peoples Medical Help.',
    image: 'https://i.ibb.co/Dg5z9vp/MMH-Project.png', // Replace with your project image
    liveLink: '../..//public/MMH-Project.png', // Replace with your live project link
    repoLink: 'https://github.com/shaikh-vahab/MMH-Backend.git', // Replace with your GitHub repo link
  },
  {
    title: 'Raza-Juice',
    description: 'It Is juice Center Project To Provide Make And Order The Juices',
    image: 'https://i.ibb.co/CnGjNPY/Juice-project.png',
    liveLink: 'https://www.zomato.com/mumbai/raza-juice-center-sewri',
    repoLink: 'https://github.com/shaikh-vahab/Raza-juice-frontend',
  },
  {
    title: 'Tekisky-Mart',
    description: 'Is An a E-commerce Project We Can Byu And Cell Product ',
    image: 'https://i.ibb.co/3vS4Bj9/Tekisky-Mart.png',
    liveLink: 'https://www.tekiskymart.com/',
    repoLink: 'https://github.com/Tekisky123/Tekisky-Mart',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
