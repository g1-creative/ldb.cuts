import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="section-title">About LDB Cuts Barbershop</h1>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Your Trusted Barbershop in Bonita Springs</h2>
              <p>
                LDB Cuts Barbershop is a family-friendly, professional barbershop dedicated to providing 
                exceptional grooming services to the Bonita Springs community. We pride ourselves on creating 
                a welcoming atmosphere where clients of all ages feel comfortable and valued.
              </p>
              <p>
                Our experienced barbers bring years of expertise to every appointment, ensuring that each cut 
                is executed with precision and attention to detail. Whether you're looking for a classic 
                haircut, a modern fade, or a complete grooming service, we have the skills and dedication to 
                deliver results that exceed your expectations.
              </p>
              <p>
                At LDB Cuts, customer satisfaction is our top priority. We take the time to understand your 
                style preferences and work with you to achieve the look you want. From kids' cuts to senior 
                services, we welcome everyone and treat every client with the respect and professionalism they 
                deserve.
              </p>
              <p>
                Located in the heart of Bonita Springs, we're conveniently accessible and easy to book through 
                our online booking platform. Experience the LDB Cuts difference – where quality, professionalism, 
                and customer care come together.
              </p>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <span>Owner/Barber Photo Placeholder</span>
                <p>Add photo of owner or barber here</p>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality</h3>
                <p>We never compromise on the quality of our work. Every cut is executed with precision and care.</p>
              </div>
              <div className="value-item">
                <h3>Experience</h3>
                <p>Our barbers bring years of experience and stay current with the latest trends and techniques.</p>
              </div>
              <div className="value-item">
                <h3>Customer Focus</h3>
                <p>Your satisfaction is our priority. We listen to your needs and deliver results you'll love.</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>We're proud to serve the Bonita Springs community and build lasting relationships with our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

