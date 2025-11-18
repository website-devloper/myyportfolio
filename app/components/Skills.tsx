// /app/components/Skills.tsx
import 'bootstrap-icons/font/bootstrap-icons.css';

const skillsData = [
  { icon: 'bi-code-slash', title: 'Frontend', description: 'HTML, CSS, JS, React, Next.js, Bootstrap' },
  { icon: 'bi-server', title: 'Backend', description: 'PHP, Laravel, Node.js' },
  { icon: 'bi-database-fill', title: 'Databases', description: 'MySQL, MongoDB' },
  { icon: 'bi-tools', title: 'Tools & DevOps', description: 'Git, Docker, APIs, Linux basics' },
  { icon: 'bi-robot', title: 'AI Tools', description: 'Automation workflows, chatbot integration' },
  { icon: 'bi-shield-check', title: 'Cybersecurity', description: 'Cybersecurity basics and best practices' },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="text-center">
            <h3 className="section-title">My Toolbox</h3>
            <h2 className="section-subtitle">Skills & Technologies</h2>
        </div>
        <div className="row g-4">
          {skillsData.map((skill, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="skill-card text-center">
                <i className={`skill-icon ${skill.icon}`}></i>
                <h4 className="mb-2">{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

