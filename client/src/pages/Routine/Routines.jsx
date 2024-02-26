import React, { useContext } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/authContext'
import './routine.css'
import { images } from '../../data';
import { Link } from 'react-router-dom';

const Routines = () => {
  const { user } = useContext(AuthContext)
  const {data} = useFetch(`/routines/${user._id}`)

  return (
    <div className='routinesView'>
      <Navbar />
        <div className="routinesViewContainer">
          {
            data?.map((r, index) => (
              <div className="routineViewItem" key={index}>
                <img src={images[r.workout_type]} alt="" className='routineImg'/>
                <div className="routineDetails">
                  <div className="routineName">{r.name}</div>
                  <div className="routineType">{r.workout_type}</div>
                  <div className="routinePart">{r.body_part}</div>
                </div>
                {r.link && <Link to={r.link} style={{textDecoration: "none", color:"black"}}>
                  <div className="routineLink">Watch Workout Video</div>
                </Link>}
              </div>
            ))
          }
        </div>
      <Footer />
    </div>
  )
}

export default Routines