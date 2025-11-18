// /app/components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4">
              Hi, I'm WevTex. I Build Future-Ready IT & Software Solutions.
            </h1>
            <p className="lead mb-4">
              Full Stack Developer specializing in automation, modern web apps, and smart digital solutions.
            </p>
            <Link href="#projects" legacyBehavior>
              <a className="btn btn-primary me-3 mb-3">View Projects</a>
            </Link>
            <Link href="#contact" legacyBehavior>
              <a className="btn btn-secondary mb-3">Contact Me</a>
            </Link>
          </div>
          <div className="col-lg-6 d-none d-lg-block text-center">
            <Image src="/globe.svg" alt="Futuristic Globe" width={400} height={400} className="futuristic-shape" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;