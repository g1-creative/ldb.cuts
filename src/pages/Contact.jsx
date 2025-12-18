import './Contact.css'

const Contact = () => {
  const address = "8951 Bonita Beach Rd SE Suite 580, Unit 8, Bonita Springs, FL 34135"
  const phone = "(239) 465-7270"
  const email = "ldbcutsbarbershop@gmail.com"

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="contact-intro">
            Visit us at our location in Bonita Springs or get in touch to book your appointment.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              
              <div className="contact-item">
                <h3>Address</h3>
                <address>
                  {address}
                </address>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="contact-link">
                  {phone}
                </a>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <a href={`mailto:${email}`} className="contact-link">
                  {email}
                </a>
              </div>

              <div className="contact-item">
                <h3>Business Hours</h3>
                <div className="hours">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="hours-note">*Hours may vary. Please check Booksy for current availability.</p>
                </div>
              </div>

              <div className="contact-cta">
                <a 
                  href="https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-container">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LDB Cuts Barbershop Location"
                ></iframe>
              </div>
              <p className="map-note">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

