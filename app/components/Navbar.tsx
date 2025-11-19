// /app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="#home" className="navbar-brand">
          Fatima.Zahra.Dev
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="#home" className="nav-link" onClick={toggleNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link" onClick={toggleNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link href="#skills" className="nav-link" onClick={toggleNavbar}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" className="nav-link" onClick={toggleNavbar}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="#services" className="nav-link" onClick={toggleNavbar}>Services</Link>
            </li>
            <li className="nav-item">
              <Link href="#testimonials" className="nav-link" onClick={toggleNavbar}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link" onClick={toggleNavbar}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
