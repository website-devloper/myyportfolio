// /app/components/Services.tsx
import 'bootstrap-icons/font/bootstrap-icons.css';

const servicesData = [
  { icon: 'bi-display', title: 'Website & Web App Development', description: 'Creating responsive, high-performance websites and applications tailored to your personal or business needs.' },
  { icon: 'bi-gear-wide-connected', title: 'IT & Automation Solutions', description: 'Building custom scripts and AI-powered workflows to automate repetitive tasks and boost your efficiency.' },
  { icon: 'bi-palette', title: 'UI/UX Design', description: 'Designing intuitive, user-friendly interfaces with a clean and modern aesthetic for your digital projects.' },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="text-center">
            <h3 className="section-title">What I Offer</h3>
            <h2 className="section-subtitle">Personal Services</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card text-center">
                <i className={`skill-icon ${service.icon}`}></i>
                <h4 className="mb-3">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services