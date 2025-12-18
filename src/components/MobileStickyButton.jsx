import { Link } from 'react-router-dom'
import './MobileStickyButton.css'

const MobileStickyButton = () => {
  return (
    <div className="mobile-sticky-btn">
      <Link 
        to="/booking"
        className="btn btn-primary"
      >
        Book Appointment
      </Link>
    </div>
  )
}

export default MobileStickyButton

