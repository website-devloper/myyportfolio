import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const testimonialsData = [
  { name: 'Client A', role: 'Startup Founder', text: 'WevTex delivered a fantastic web app that was both functional and beautiful. The automation features have saved us countless hours.' },
  { name: 'Client B', role: 'Small Business Owner', text: 'The new website is professional, fast, and exactly what we needed. The process was smooth and collaborative from start to finish.' },
  { name: 'Client C', role: 'Project Manager', text: 'An incredibly skilled developer. The UI/UX design for our internal tool was intuitive and received great feedback from the team.' },
  { name: 'Client D', role: 'CTO', text: 'Exceptional code quality and attention to detail. The platform scales perfectly and the documentation was comprehensive.' },
  { name: 'Client E', role: 'Marketing Director', text: 'Our conversion rates doubled after the redesign. The visual storytelling and user flow are exactly what we envisioned.' },
  { name: 'Client F', role: 'Product Lead', text: 'A true partner in development. They understood our complex requirements and delivered a solution that exceeded expectations.' },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 992) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [itemsPerPage]); // Reset timer if layout changes

  // Reset active index if itemsPerPage changes to avoid out of bounds
  useEffect(() => {
    setActiveIndex(0);
  }, [itemsPerPage]);

  const currentItems = testimonialsData.slice(
    activeIndex * itemsPerPage,
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <section id="testimonials" className="testimonials-section position-relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="hero-bg-glow" style={{ top: '50%', left: '-10%', width: '400px', height: '400px', opacity: '0.1' }}></div>
      <div className="hero-bg-glow-2" style={{ bottom: '10%', right: '-10%', width: '400px', height: '400px', opacity: '0.1' }}></div>

      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h3 className="section-subtitle">Testimonials</h3>
          <h2 className="section-title">What <span className="text-gradient">Others Say</span></h2>
        </div>

        <div className="position-relative px-lg-5">
          {/* Slider Content */}
          <div className="row g-4 justify-content-center" style={{ minHeight: '400px' }}>
            {currentItems.map((testimonial, index) => (
              <div className={`col-lg-${12 / itemsPerPage === 4 ? '4' : 12 / itemsPerPage === 6 ? '6' : '12'}`} key={`${activeIndex}-${index}`}>
                <div className="glass-panel p-4 h-100 testimonial-card position-relative d-flex flex-column animate-fade-in">
                  <i className="bi bi-quote quote-icon fs-1 mb-3 d-block"></i>
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning small me-1"></i>
                    ))}
                  </div>
                  <p className="text-white-50 fst-italic mb-4 flex-grow-1">"{testimonial.text}"</p>
                  <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
                    <h5 className="fw-bold mb-1 text-white">{testimonial.name}</h5>
                    <span className="d-block text-primary small text-uppercase fw-bold">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="btn btn-icon position-absolute top-50 start-0 translate-middle-y d-none d-lg-flex align-items-center justify-content-center rounded-circle glass-panel border-0 text-white"
            style={{ width: '48px', height: '48px', zIndex: 10, left: '-20px' }}
            aria-label="Previous"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <button
            onClick={nextSlide}
            className="btn btn-icon position-absolute top-50 end-0 translate-middle-y d-none d-lg-flex align-items-center justify-content-center rounded-circle glass-panel border-0 text-white"
            style={{ width: '48px', height: '48px', zIndex: 10, right: '-20px' }}
            aria-label="Next"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          {/* Indicators */}
          <div className="d-flex justify-content-center mt-5 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`btn p-0 rounded-pill transition-all ${i === activeIndex ? 'bg-primary' : 'bg-secondary opacity-50'}`}
                style={{ width: i === activeIndex ? '32px' : '12px', height: '12px', border: 'none' }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;