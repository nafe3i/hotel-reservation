import { Link } from "react-router-dom"
import "./FacilitiesSection.css"

// // Import icons
// import swimmingPoolIcon from "../assets/icons/swimming-pool.svg"
// import wifiIcon from "../assets/icons/wifi.svg"
// import spaIcon from "../assets/icons/spa.svg"
// import gymIcon from "../assets/icons/gym.svg"
// import restaurantIcon from "../assets/icons/restaurant.svg"
// import barIcon from "../assets/icons/bar.svg"
// import parkingIcon from "../assets/icons/parking.svg"
// import roomServiceIcon from "../assets/icons/room-service.svg"

const facilities = [
  { id: 1, name: "Swimming Pool", icon: swimmingPoolIcon },
  { id: 2, name: "Free WiFi", icon: wifiIcon },
  { id: 3, name: "Spa", icon: spaIcon },
  { id: 4, name: "Fitness Center", icon: gymIcon },
  { id: 5, name: "Restaurant", icon: restaurantIcon },
  { id: 6, name: "Bar", icon: barIcon },
  { id: 7, name: "Parking", icon: parkingIcon },
  { id: 8, name: "Room Service", icon: roomServiceIcon },
]

const FacilitiesSection = () => {
  return (
    <section className="facilities-section">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>
        <p className="section-subtitle">We offer a wide range of facilities to make your stay comfortable</p>

        <div className="facilities-grid">
          {facilities.map((facility) => (
            <Link to="/facilities" key={facility.id} className="facility-item">
              <div className="facility-icon">
                <img src={facility.icon || "/placeholder.svg"} alt={facility.name} />
              </div>
              <h3>{facility.name}</h3>
            </Link>
          ))}
        </div>

        <div className="view-more">
          <Link to="/facilities" className="view-more-link">
            View All Facilities
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection

