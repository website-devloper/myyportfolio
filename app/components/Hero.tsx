
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="hero-section position-relative overflow-hidden">
      {/* Background Decoration */}
      <div className="why-bg-decoration">
        <div className="blob blob-1" style={{ top: '-10%', left: '-10%', opacity: 0.2 }}></div>
        <div className="blob blob-2" style={{ bottom: '-10%', right: '-10%', opacity: 0.2 }}></div>
      </div>

      <div className="container pt-5 position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start" data-aos="fade-right">
            <div className="why-badge mb-4" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-stars me-2"></i> Open to Exciting Projects
            </div>

            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
              Transforming Ideas Into
              <span className="text-gradient"> Digital Reality</span>
            </h1>

            <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'React & Next.js Expert', 2000,
                  'AI Solutions Architect', 2000,
                  'WordPress Specialist', 2000,
                  'Cloud Solutions Engineer', 2000,
                  'UI/UX Designer', 2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-hero fw-bold"
                repeat={Infinity}
              />
            </h2>

            <p className="lead text-white-100 mb-5" style={{ maxWidth: '600px' }} data-aos="fade-up" data-aos-delay="400">
              I craft elegant, high-performance digital solutions that drive growth and exceed expectations. From sleek websites to intelligent automation systems—I build what you envision.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-delay="500">
              <Link href="#projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link href="#contact" className="btn btn-outline-primary">
                Contact Me
              </Link>
            </div>

            <div className="mt-5 d-flex align-items-center gap-4 justify-content-center justify-content-lg-start text-white small" data-aos="fade-up" data-aos-delay="600">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span>Pixel Perfect</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span>Performance Optimized</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span>SEO Ready</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-image-wrapper">
              <Image
                src="/photome1.png"
                alt="Fatima Zahra Sabbar - Full Stack Developer"
                width={600}
                height={600}
                className="img-fluid position-relative z-1"
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
