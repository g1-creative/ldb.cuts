import ZoomParallax from '../components/ZoomParallax'
import './Gallery.css'

const Gallery = () => {
  // Barbershop-related images from Unsplash
  const parallaxImages = [
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Professional barber cutting hair',
    },
    {
      src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Barbershop interior with vintage style',
    },
    {
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Precision fade haircut',
    },
    {
      src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Barber tools and equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1622296242080-2f42d8412c22?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Modern barbershop styling',
    },
    {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Beard grooming and trimming',
    },
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Professional haircut service',
    },
  ]

  // Placeholder for additional gallery images
  const imageCount = 12

  return (
    <div className="gallery-page">
      <section className="gallery-hero section">
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className="gallery-intro">
            Take a look at our work. Each cut is crafted with precision and attention to detail.
          </p>
        </div>
      </section>

      {/* Zoom Parallax Section */}
      <section className="gallery-parallax-section">
        <div className="gallery-parallax-intro">
          <h2 className="section-title">Our Work in Motion</h2>
          <p className="section-subtitle">
            Scroll to experience our craftsmanship through an immersive gallery
          </p>
        </div>
        <ZoomParallax images={parallaxImages} />
        <div className="gallery-parallax-spacer" />
      </section>

      {/* Traditional Gallery Grid */}
      <section className="gallery-content section">
        <div className="container">
          <h2 className="section-title">More of Our Work</h2>
          <div className="gallery-grid">
            {Array.from({ length: imageCount }, (_, index) => (
              <div key={index} className="gallery-item">
                <div className="image-placeholder">
                  <span>Image {index + 1}</span>
                  <p>Add haircut photo here</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

