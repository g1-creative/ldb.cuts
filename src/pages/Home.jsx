import { Link } from 'react-router-dom'
import BooksyWidget from '../components/BooksyWidget'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Precision Cuts. Clean Fades. Professional Service.</h1>
            <p className="hero-subtitle">
              Experience the finest in barbershop services at LDB Cuts. Our skilled barbers bring years of expertise 
              to every cut, ensuring you leave looking and feeling your best. Family-friendly, professional, and 
              committed to your satisfaction.
            </p>
            <div className="hero-cta">
              <Link 
                to="/booking"
                className="btn btn-primary"
              >
                Book an Appointment
              </Link>
              <a 
                href="tel:+12394657270" 
                className="btn btn-secondary"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>Hero Image Placeholder</span>
              <p>Add your barbershop hero image here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Choose LDB Cuts?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Expert Barbers</h3>
              <p>Skilled professionals with years of experience in precision cuts and modern styles.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Service</h3>
              <p>We take pride in every cut, ensuring attention to detail and customer satisfaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍👩‍👧‍👦</div>
              <h3>Family Friendly</h3>
              <p>Welcoming environment for men, kids, and seniors. Everyone is welcome at LDB Cuts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Convenient Location</h3>
              <p>Located in Bonita Springs, FL with easy booking through Booksy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-preview section">
        <div className="container">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="booking-preview-intro">
            Select your service, choose your preferred date and time, and book instantly. 
            All appointments are confirmed immediately.
          </p>
          <div className="booking-preview-widget">
            <BooksyWidget variant="inline" />
          </div>
          <div className="booking-preview-cta">
            <Link to="/booking" className="btn btn-secondary">
              View Full Booking Page
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Next Cut?</h2>
            <p>Book your appointment today and experience the LDB Cuts difference.</p>
            <Link 
              to="/booking"
              className="btn btn-primary"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

