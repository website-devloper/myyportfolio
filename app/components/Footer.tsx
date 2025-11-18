// /app/components/Footer.tsx
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="mb-3">
          <a href="#" className="social-icon"><i className="bi bi-github"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
        </div>
        <div className="mb-3">
          <a href="#home" className="mx-2">Home</a>|
          <a href="#skills" className="mx-2">Skills</a>|
          <a href="#projects" className="mx-2">Projects</a>|
          <a href="#contact" className="mx-2">Contact</a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} WevTex. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer