// /app/components/Projects.tsx
import Image from 'next/image';

const projectsData = [
  { title: 'Portfolio Website', description: 'This personal portfolio, built with Next.js and a futuristic design.', tech: ['Next.js', 'Bootstrap', 'TypeScript'], link: '#', image: '/window.svg' },
  { title: 'AI Chatbot Integration', description: 'A smart chatbot integrated into a web app for customer support.', tech: ['React', 'Node.js', 'Dialogflow'], link: '#', image: '/window.svg' },
  { title: 'Web Application', description: 'A full-featured scalable web application for a client.', tech: ['Laravel', 'MySQL', 'Vue.js'], link: '#', image: '/window.svg' },
  { title: 'Automation Script', description: 'A Python script to automate data entry and report generation.', tech: ['Python', 'APIs'], link: '#', image: '/file.svg' },
  { title: 'WordPress Site', description: 'A clean and professional website for a business client.', tech: ['WordPress', 'PHP', 'CSS'], link: '#', image: '/window.svg' },
  { title: 'Cybersecurity Mini-Tool', description: 'A simple tool for scanning common web vulnerabilities.', tech: ['Node.js', 'Docker'], link: '#', image: '/file.svg' },
];

const Projects = () => {
  return (
    <section className="projects-section bg-light">
      <div className="container">
        <div className="text-center">
            <h3 className="section-title">My Work</h3>
            <h2 className="section-subtitle">Featured Projects</h2>
        </div>
        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-card">
                <Image src={project.image} alt={project.title} width={100} height={100} className="img-fluid mb-3" />
                <h5 className="mt-3">{project.title}</h5>
                <p>{project.description}</p>
                <div className="mb-3">
                  {project.tech.map((t, i) => (
                    <span className="badge tech-badge me-2 mb-2" key={i}>{t}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-sm btn-outline-primary">
                  View Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

