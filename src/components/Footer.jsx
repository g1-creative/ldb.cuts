import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">LDB Cuts Barbershop</h3>
            <p className="footer-description">
              Professional barbershop serving Bonita Springs, FL with precision cuts and exceptional service.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <a href="tel:+12394657270">(239) 465-7270</a>
              </li>
              <li>
                <a href="mailto:ldbcutsbarbershop@gmail.com">ldbcutsbarbershop@gmail.com</a>
              </li>
              <li>
                8951 Bonita Beach Rd SE<br />
                Suite 580, Unit 8<br />
                Bonita Springs, FL 34135
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Book Appointment</h4>
            <a 
              href="https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book on Booksy
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LDB Cuts Barbershop. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span> | </span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

