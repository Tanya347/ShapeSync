import React from 'react'
import "./home.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import HomeComp from '../../components/homeComp/HomeComp'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="banner">
        <img src="/Assets/banner.jpg" alt="" />
      </div>
      <div className="mainContainer">
        <HomeComp 
          image="/Assets/planner.png" 
          name="Entries" 
          description="Keep track of your daily progress"
          view="/entries"
        />
        <HomeComp 
          image="/Assets/routine.png" 
          name="Routines"
          description="Add personalized routines"
          view="/routines"
        />
        <HomeComp 
          image="/Assets/meal.png" 
          name="Meals"
          description="Add personalized meals"
          view="/meals"
        />

      </div>
      <Footer />
      
    </div>
  )
}

export default Home