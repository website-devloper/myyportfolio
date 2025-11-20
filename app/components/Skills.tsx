// /app/components/Skills.tsx
import 'bootstrap-icons/font/bootstrap-icons.css';

const skillsData = [
  { icon: 'bi-code-slash', title: 'Frontend', description: 'HTML, CSS, JS, React, Next.js, Bootstrap', color: 'var(--primary-color)' },
  { icon: 'bi-server', title: 'Backend', description: 'PHP, Laravel, Node.js', color: 'var(--secondary-color)' },
  { icon: 'bi-database-fill', title: 'Databases', description: 'MySQL, MongoDB', color: 'var(--accent-cyan)' },
  { icon: 'bi-tools', title: 'Tools & DevOps', description: 'Git, Docker, APIs, Linux basics', color: '#10b981' },
  { icon: 'bi-robot', title: 'AI Tools', description: 'Automation workflows, chatbot integration', color: '#f59e0b' },
  { icon: 'bi-shield-check', title: 'Cybersecurity', description: 'Cybersecurity basics and best practices', color: '#ef4444' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section position-relative overflow-hidden">
      <div className="hero-bg-glow-2" style={{ top: '20%', right: '-10%', width: '600px', height: '600px', opacity: '0.15' }}></div>
      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h3 className="section-subtitle">My Toolbox</h3>
          <h2 className="section-title">Skills & <span className="text-gradient">Technologies</span></h2>
        </div>
        <div className="row g-4">
          {skillsData.map((skill, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="glass-panel p-4 h-100 text-center about-card" style={{ '--hover-color': skill.color } as React.CSSProperties}>
                <div className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle icon-box" style={{ width: '80px', height: '80px', background: `color-mix(in srgb, ${skill.color}, transparent 90%)` }}>
                  <i className={`bi ${skill.icon} fs-1`} style={{ color: skill.color }}></i>
                </div>
                <h4 className="text-white mb-3">{skill.title}</h4>
                <p className="text-white-50 mb-0">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

