// /app/components/About.tsx
const About = () => {
  return (
    <section className="py-20 bg-background-color">
      <div className="container">
        <div className="text-center mb-12">
            <h3 className="section-title">About Me</h3>
            <h2 className="section-subtitle">Who I Am</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <p className="text-xl text-secondary/80 mb-4">
              I am WevTex, a Full Stack Developer and IT Solutions Builder passionate about creating modern, efficient, and scalable digital solutions. My expertise lies in turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-secondary/80">
              My mission is to create modern, secure, and scalable digital solutions that help businesses grow. Whether it's developing a web application, automating a workflow with AI, or designing a user-friendly interface, I am dedicated to delivering high-quality results that exceed expectations.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 shadow-lg mt-4 lg:mt-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <h5 className="text-2xl font-bold text-secondary mb-4">Core Philosophy</h5>
              <div className="mb-3">
                <strong>Years of experience:</strong> 5+
              </div>
              <div className="mb-3">
                <strong>Main specialties:</strong> Full Stack Dev, AI Automation, IT Solutions
              </div>
              <div>
                <strong>My work philosophy:</strong> "Helping businesses and individuals build modern and efficient digital solutions.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
