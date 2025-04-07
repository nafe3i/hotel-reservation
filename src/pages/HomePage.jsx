"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import "./HomePage.css"

const HomePage = () => {
  const [featuredRooms, setFeaturedRooms] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch featured rooms from Laravel API
        const roomsResponse = await axios.get("http://localhost:8000/api/rooms/featured")
        setFeaturedRooms(roomsResponse.data)

        // Fetch testimonials from Laravel API
        const testimonialsResponse = await axios.get("http://localhost:8000/api/testimonials")
        setTestimonials(testimonialsResponse.data)

        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="home-page">
      {/* <HeroSection />
      <BookingForm />
      <FacilitiesSection />
      <RoomsSection rooms={featuredRooms} loading={loading} />
      <TestimonialsSection testimonials={testimonials} loading={loading} /> */}
    </div>
  )
}

export default HomePage

