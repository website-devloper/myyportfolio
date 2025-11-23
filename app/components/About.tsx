// /app/components/About.tsx
const About = () => {
  return (
    <section id="about" className="about-section position-relative overflow-hidden">
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
                I am the <span className="text-primary fw-bold"> Co-Founder </span>of <span className="text-primary fw-bold">WevTex </span>, a Full Stack Developer and IT Solutions Specialist 
                dedicated to building modern, 
                secure, and scalable digital experiences for businesses.

                I help companies grow by developing websites, automating processes, and designing interfaces that are simple, powerful, and user-friendly.
              </p>
              <p className="text-white-1000 mb-4">
               My mission is to deliver clean and efficient solutions that solve real problems whether it’s a custom web application, a business website, an AI-powered automated workflow, or a complete digital system built from scratch.
              </p>

              <div className="d-flex gap-4 mt-5">
                <div>
                  <h2 className="fw-bold text-gradient mb-0">3+</h2>
                  <p className="small text-white-1000">Years Exp.</p>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <h2 className="fw-bold text-gradient mb-0">30+</h2>
                  <p className="small text-white-1000">Projects</p>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <h2 className="fw-bold text-gradient mb-0">100%</h2>
                  <p className="small text-white-1000">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="glass-panel p-4 h-100 about-card" style={{ '--hover-color': 'var(--primary-color)' } as React.CSSProperties}>
                  <i className="bi bi-code-square fs-2 mb-3 d-block" style={{ color: 'var(--primary-color)' }}></i>
                  <h5 className="text-white mb-2">Full Stack</h5>
                  <p className="text-white-100 small mb-0">Developing custom, high-performance web applications tailored to your business needs.</p>
                </div>
              </div>
              <div className="col-md-6 mt-md-5">
                <div className="glass-panel p-4 h-100 about-card" style={{ '--hover-color': 'var(--secondary-color)' } as React.CSSProperties}>
                  <i className="bi bi-robot fs-2 mb-3 d-block" style={{ color: 'var(--secondary-color)' }}></i>
                  <h5 className="text-white mb-2">AI Automation</h5>
                  <p className="text-white-100 small mb-0">Automating repetitive tasks and workflows to increase efficiency and reduce costs.</p>
                </div>
              </div>
              <div className="col-md-6 mt-md-n5">
                <div className="glass-panel p-4 h-100 about-card" style={{ '--hover-color': 'var(--accent-cyan)' } as React.CSSProperties}>
                  <i className="bi bi-palette fs-2 mb-3 d-block" style={{ color: 'var(--accent-cyan)' }}></i>
                  <h5 className="text-white mb-2">WordPress Development</h5>
                  <p className="text-white-100 small mb-0">Designing modern, intuitive interfaces that provide an exceptional user experience.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="glass-panel p-4 h-100 about-card" style={{ '--hover-color': '#10b981' } as React.CSSProperties}>
                  <i className="bi bi-shield-check fs-2 mb-3 d-block" style={{ color: '#10b981' }}></i>
                  <h5 className="text-white mb-2">IT Solutions</h5>
                  <p className="text-white-100 small mb-0">Providing secure, scalable IT infrastructure and technical support solutions.</p>
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
