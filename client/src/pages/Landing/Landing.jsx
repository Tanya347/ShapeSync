import React from 'react'
import "./landing.css"
import {Link} from "react-router-dom"

const Landing = () => {
  return (
    <div className='landing'>
      <div className="header">
        <img src="/assets/header.jpg" alt="" />
      </div>
      <div className="upper-layer">
        <h1>Welcome to <span className='brand-name'>ShapeSync</span></h1>
        <Link to="/login">
          <button className='btn-get-started'>Get Started</button>
        </Link>
      </div>

    </div>
  )
}

export default Landing