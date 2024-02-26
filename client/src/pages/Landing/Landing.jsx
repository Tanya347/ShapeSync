import React, { useContext } from 'react'
import "./landing.css"
import { AuthContext } from '../../context/authContext'
import {Link} from "react-router-dom"

const Landing = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className='landing'>
      <div className="header">
        <img src="/assets/header.jpg" alt="" />
      </div>
      <div className="upper-layer">
        <h1>Welcome to <span className='brand-name'>ShapeSync</span></h1>
        <Link to={user ? '/home' : '/login'}>
          <button className='btn-get-started'>Get Started</button>
        </Link>
      </div>

    </div>
  )
}

export default Landing