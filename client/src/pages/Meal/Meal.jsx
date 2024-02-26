import React, { useContext } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/authContext'
import "./meal.css"

const Meal = () => {
  const { user } = useContext(AuthContext)
  const {data} = useFetch(`/meals/${user._id}`)

  return (
    <div className='mealsView'>
      <Navbar />

      <div className="mealsViewContainer">
        {
          data?.map((m, index)=>(
            <div className="mealViewItem"  key={index}>
              <img src="/Assets/meal.jpg" alt="" className='mealImg' />
              <div className="mealDetails">
                <div className="mealName">{m.name}</div>
                <div className="mealDesc">{m.description}</div>
                <div className="mealTime">{m.time} minutes</div>
                <div className="mealCat">{m.category}</div>
              </div>
            </div>
          ))
        }
      </div>

      <Footer />
    </div>
  )
}

export default Meal