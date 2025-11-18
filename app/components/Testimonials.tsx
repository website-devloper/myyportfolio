// /app/components/Testimonials.tsx

const testimonialsData = [
  { name: 'Client A', role: 'Startup Founder', text: 'WevTex delivered a fantastic web app that was both functional and beautiful. The automation features have saved us countless hours.' },
  { name: 'Client B', role: 'Small Business Owner', text: 'The new website is professional, fast, and exactly what we needed. The process was smooth and collaborative from start to finish.' },
  { name: 'Client C', role: 'Project Manager', text: 'An incredibly skilled developer. The UI/UX design for our internal tool was intuitive and received great feedback from the team.' },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section bg-light">
      <div className="container">
        <div className="text-center">
            <h3 className="section-title">Testimonials</h3>
            <h2 className="section-subtitle">What Others Say</h2>
        </div>
        <div className="row g-4">
          {testimonialsData.map((testimonial, index) => (
            <div className="col-lg-4" key={index}>
              <div className="testimonial-card">
                <p className="fst-italic">"{testimonial.text}"</p>
                <div className="mt-3">
                  <strong>{testimonial.name}</strong>
                  <span className="d-block text-muted">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;