import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import './ZoomParallax.css'

const ZoomParallax = ({ images = [] }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])
  // Middle image (index 3) should zoom the most to be the focal point
  const scaleCenter = useTransform(scrollYProgress, [0, 1], [1, 10])

  const scales = [scale4, scale5, scale6, scaleCenter, scale6, scale8, scale9]

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div ref={container} className="zoom-parallax-container">
      <div className="zoom-parallax-sticky">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length]
          const imageClass = `zoom-parallax-image zoom-parallax-image-${index}`

          // Center image (index 3) needs special handling to stay centered
          const isCenter = index === 3
          
          return (
            <motion.div
              key={index}
              style={{ 
                scale,
                ...(isCenter && {
                  x: '-50%',
                  y: '-50%',
                })
              }}
              className={`zoom-parallax-item ${isCenter ? 'zoom-parallax-center' : ''}`}
            >
              <div className={imageClass}>
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="zoom-parallax-img"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default ZoomParallax

