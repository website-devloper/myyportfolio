// /app/components/About.tsx
const About = () => {
  return (
    <section id="about" className="about-section position-relative overflow-hidden">
      {/* Background Elements */}
      <div className="hero-bg-glow" style={{ top: '50%', left: '-20%', width: '800px', height: '800px', opacity: '0.1' }}></div>

      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h3 className="section-subtitle">About Me</h3>
          <h2 className="section-title">Who I <span className="text-gradient">Am</span></h2>
        </div>

        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <p className="lead text-white mb-4">
                I am <span className="text-primary fw-bold">WevTex</span>, a Full Stack Developer and IT Solutions Builder passionate about creating <span className="text-white">modern, efficient, and scalable</span> digital solutions.
              </p>
              <p className="text-white-50 mb-4">
                My mission is to create modern, secure, and scalable digital solutions that help businesses grow. Whether it's developing a web application, automating a workflow with AI, or designing a user-friendly interface, I am dedicated to delivering high-quality results.
              </p>

              <div className="d-flex gap-4 mt-5">
                <div>
                  <h2 className="fw-bold text-gradient mb-0">5+</h2>
                  <p className="small text-white-50">Years Exp.</p>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <h2 className="fw-bold text-gradient mb-0">50+</h2>
                  <p className="small text-white-50">Projects</p>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <h2 className="fw-bold text-gradient mb-0">100%</h2>
                  <p className="small text-white-50">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="glass-panel p-4 h-100 glow-effect">
                  <i className="bi bi-code-square fs-2 mb-3 d-block" style={{ color: 'var(--primary-color)' }}></i>
                  <h5 className="text-white mb-2">Full Stack</h5>
                  <p className="text-white-50 small mb-0">Developing custom, high-performance web applications tailored to your business needs.</p>
                </div>
              </div>
              <div className="col-md-6 mt-md-5">
                <div className="glass-panel p-4 h-100 glow-effect">
                  <i className="bi bi-robot fs-2 mb-3 d-block" style={{ color: 'var(--secondary-color)' }}></i>
                  <h5 className="text-white mb-2">AI Automation</h5>
                  <p className="text-white-50 small mb-0">Automating repetitive tasks and workflows to increase efficiency and reduce costs.</p>
                </div>
              </div>
              <div className="col-md-6 mt-md-n5">
                <div className="glass-panel p-4 h-100 glow-effect">
                  <i className="bi bi-palette fs-2 mb-3 d-block" style={{ color: 'var(--accent-cyan)' }}></i>
                  <h5 className="text-white mb-2">UI/UX Design</h5>
                  <p className="text-white-50 small mb-0">Designing modern, intuitive interfaces that provide an exceptional user experience.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="glass-panel p-4 h-100 glow-effect">
                  <i className="bi bi-shield-check fs-2 mb-3 d-block" style={{ color: '#10b981' }}></i>
                  <h5 className="text-white mb-2">IT Solutions</h5>
                  <p className="text-white-50 small mb-0">Providing secure, scalable IT infrastructure and technical support solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
