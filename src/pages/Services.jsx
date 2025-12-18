import { Link } from 'react-router-dom'
import BooksyWidget from '../components/BooksyWidget'
import './Services.css'

const Services = () => {
  const services = [
    { name: 'Regular Haircut', duration: '30 min', price: 'Starting at $25' },
    { name: 'Haircut + Beard', duration: '45 min', price: 'Starting at $35' },
    { name: 'Skin Fade', duration: '35 min', price: 'Starting at $30' },
    { name: 'Skin Fade + Beard', duration: '50 min', price: 'Starting at $40' },
    { name: 'Beard Lineup', duration: '20 min', price: 'Starting at $15' },
    { name: 'Kids Haircut', duration: '25 min', price: 'Starting at $20' },
    { name: 'Senior Haircut', duration: '30 min', price: 'Starting at $22' },
    { name: 'Buzz Cut', duration: '20 min', price: 'Starting at $18' },
    { name: 'Taper', duration: '30 min', price: 'Starting at $25' },
    { name: 'Haircut & Eyebrows', duration: '35 min', price: 'Starting at $30' },
    { name: 'Full Service', duration: '60 min', price: 'Starting at $50' },
    { name: 'Royal Service', duration: '75 min', price: 'Starting at $65' },
  ]

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="services-intro">
            We offer a wide range of professional barbershop services to meet all your grooming needs. 
            From classic cuts to modern fades, our experienced barbers deliver precision and style.
          </p>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <h3 className="service-name">{service.name}</h3>
                  <span className="service-duration">{service.duration}</span>
                </div>
                <p className="service-price">{service.price}</p>
              </div>
            ))}
          </div>
          
          <div className="services-cta">
            <Link 
              to="/booking"
              className="btn btn-primary"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="services-booking section">
        <div className="container">
          <h2 className="section-title">Ready to Book?</h2>
          <p className="services-booking-intro">
            View all available services, select your preferred time, and book your appointment directly below.
          </p>
          <div className="services-booking-widget">
            <BooksyWidget variant="inline" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

