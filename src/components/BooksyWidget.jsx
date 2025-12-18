import { useEffect } from 'react'
import './BooksyWidget.css'

const BooksyWidget = ({ variant = 'inline', className = '' }) => {
  useEffect(() => {
    // Booksy widget script - this loads the official Booksy booking widget
    const scriptId = 'booksy-widget-script'
    const existingScript = document.getElementById(scriptId)
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://booksy.com/widget/code.js'
      script.setAttribute('data-type', 'inline')
      script.setAttribute('data-account', '1073297')
      script.setAttribute('data-service', '15815')
      script.async = true
      document.body.appendChild(script)
    }
    
    return () => {
      // Don't remove script on unmount as it may be used by other components
    }
  }, [])

  if (variant === 'button') {
    return (
      <div className={`booksy-button-wrapper ${className}`}>
        <a
          className="booksy-button"
          href="https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Appointment
        </a>
      </div>
    )
  }

  if (variant === 'inline') {
    // Use iframe for inline booking experience
    return (
      <div className={`booksy-widget-container ${className}`}>
        <iframe
          src="https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs"
          className="booksy-iframe"
          title="Book Appointment - LDB Cuts Barbershop"
          allow="payment"
          loading="lazy"
        />
      </div>
    )
  }

  return null
}

export default BooksyWidget

