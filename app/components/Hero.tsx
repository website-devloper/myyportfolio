import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="hero-bg-glow-2"></div>

      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start z-1">
            <div className="hero-badge">
              <i className="bi bi-stars me-2"></i> Available for Freelance
            </div>

            <h1 className="hero-title">
              All Your Digital Needs
              <span className="text-gradient"> One Expert</span>
            </h1>

            <h2 className="hero-subtitle">

              <TypeAnimation
                sequence={[
                  'Full Stack Development', 2000,
                  'IT Services', 2000,
                  'Problem Solving', 2000,
                  'Wordpress Development', 2000,
                  'Automation Workflows', 2000,
                  'Modern UI/UX', 2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-hero fw-bold"
                repeat={Infinity}
              />
            </h2>

            <p className="lead text-white mb-5" style={{ maxWidth: '600px' }}>
              Business websites, tools, and automations that deliver results.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Link href="#projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link href="#contact" className="btn btn-outline-primary">
                Contact Me
              </Link>
            </div>

            <div className="mt-5 d-flex align-items-center gap-4 justify-content-center justify-content-lg-start text-white small">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span>Clean Code</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span>Modern Design</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span>Responsive</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              <Image
                src="/photome1.png"
                alt="Developer Portrait"
                width={600}
                height={600}
                className="img-fluid position-relative"
                style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;