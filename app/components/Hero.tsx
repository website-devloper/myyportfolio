// /app/components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span className="text-primary">WevTex</span>.
            </h1>
            <h2 className="display-5 mb-4 hero-subtitle">
              <TypeAnimation
                sequence={[
                  'I Build Future-Ready IT Solutions.', 1500,
                  'I Develop Modern Web Applications.', 1500,
                  'I Specialize in Automation & AI.', 1500,
                  'I Create Scalable Software.', 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <div className="mt-5">
              <Link href="#projects" className="btn btn-primary btn-lg me-3 mb-3">
                View Projects <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="#contact" className="btn btn-outline-light btn-lg mb-3">
                Contact Me <i className="bi bi-envelope"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-flex justify-content-center position-relative">
            <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image src="/hero-image.svg" alt="Abstract Tech Illustration" width={500} height={500} className="d-block w-100 img-fluid hero-image" />
                </div>
                <div className="carousel-item">
                  <Image src="/hero-image-2.svg" alt="Another Abstract Tech Illustration" width={500} height={500} className="d-block w-100 img-fluid hero-image" />
                </div>
                <div className="carousel-item">
                  <Image src="/hero-image-3.svg" alt="Third Abstract Tech Illustration" width={500} height={500} className="d-block w-100 img-fluid hero-image" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;