// /app/components/Navbar.tsx
'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link href="#home" legacyBehavior>
          <a className="navbar-brand">WevTex</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="#home" legacyBehavior><a className="nav-link active">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href="#skills" legacyBehavior><a className="nav-link">Skills</a></Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" legacyBehavior><a className="nav-link">Projects</a></Link>
            </li>
            <li className="nav-item">
              <Link href="#about" legacyBehavior><a className="nav-link">About</a></Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" legacyBehavior><a className="nav-link">Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

