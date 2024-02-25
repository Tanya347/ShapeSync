import React from 'react'
import useFetch from '../../hooks/useFetch'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./entry.css"

const Entries = () => {

  const {data} = useFetch('/entries')
  
  function formatDate(dateString) {
    // Convert the date string to a Date object
    const date = new Date(dateString);

    // Extract day, month, and year components
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();

    // Construct the date string in 'dd-mm-yyyy' format
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }

  return (
    <div className='entry'>
      <Navbar />

      <div className="entriesContainer">
        {
          data?.map((d, index) => (
            <div className="entryItem" key={index}>
              <h1>{formatDate(d.date)}</h1>
              <h2>Meals taken</h2>
              <div className="mealsContainer">
                {d?.meals?.map((m, i) => (
                  <div className="mealItem" key={i}>{m.name}</div>
                ))}
              </div>
              <h2>Exercise done</h2>
              <div className="routinesContainer">
                {d?.routines?.map((r, j) => (
                  <div className="routineItem" key={j}>{r.name}</div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Entries