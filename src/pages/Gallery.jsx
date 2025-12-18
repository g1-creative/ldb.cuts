import './Gallery.css'

const Gallery = () => {
  // Placeholder for 12 images
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

      <section className="gallery-content section">
        <div className="container">
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

