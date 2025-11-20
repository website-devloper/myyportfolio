import 'bootstrap-icons/font/bootstrap-icons.css';

const servicesData = [
  {
    icon: 'bi-display',
    title: 'Website & Web App Development',
    description: 'Creating responsive, high-performance websites and applications tailored to your personal or business needs.',
    color: 'var(--primary-color)'
  },
  {
    icon: 'bi-gear-wide-connected',
    title: 'IT & Automation Solutions',
    description: 'Building custom scripts and AI-powered workflows to automate repetitive tasks and boost your efficiency.',
    color: 'var(--accent-cyan)'
  },
  {
    icon: 'bi-palette',
    title: 'UI/UX Design',
    description: 'Designing intuitive, user-friendly interfaces with a clean and modern aesthetic for your digital projects.',
    color: 'var(--secondary-color)'
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section position-relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="hero-bg-glow" style={{ top: '20%', right: '-10%', width: '500px', height: '500px', opacity: '0.15' }}></div>
      <div className="hero-bg-glow-2" style={{ bottom: '10%', left: '-10%', width: '500px', height: '500px', opacity: '0.15' }}></div>

      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h3 className="section-subtitle">What I Offer</h3>
          <h2 className="section-title">Personal <span className="text-gradient">Services</span></h2>
        </div>

        <div className="row g-4 justify-content-center">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="glass-panel p-4 h-100 text-center service-card position-relative"
                style={{ '--hover-color': service.color } as React.CSSProperties}
              >
                <div className="service-icon-box">
                  <i className={service.icon}></i>
                </div>

                <h4 className="mb-3 fw-bold text-white">{service.title}</h4>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;