import './Booking.css'

const Booking = () => {
  return (
    <div className="booking-page">
      <section className="booking-hero section">
        <div className="container">
          <h1 className="section-title">Book Your Appointment</h1>
          <p className="booking-intro">
            Select a service, choose your preferred date and time, and book your appointment online. 
            All bookings are confirmed instantly.
          </p>
        </div>
      </section>

      <section className="booking-widget-section section">
        <div className="container">
          <div className="booksy-widget-container">
            <iframe
              src="https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs"
              className="booksy-iframe"
              title="Book Appointment - LDB Cuts Barbershop"
              allow="payment"
              loading="lazy"
            />
          </div>
          
          <div className="booking-info">
            <h2>Booking Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3>📅 Easy Scheduling</h3>
                <p>View real-time availability and book at your convenience, 24/7.</p>
              </div>
              <div className="info-item">
                <h3>✅ Instant Confirmation</h3>
                <p>Receive immediate confirmation of your appointment via email and SMS.</p>
              </div>
              <div className="info-item">
                <h3>🔄 Easy Rescheduling</h3>
                <p>Modify or cancel your appointment directly from your confirmation email.</p>
              </div>
              <div className="info-item">
                <h3>💳 Secure Payment</h3>
                <p>Pay online or in-person. We accept all major credit cards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking

