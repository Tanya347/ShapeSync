import React from 'react'
import "./homeComp.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye} from '@fortawesome/free-solid-svg-icons'
import CreateMeal from '../createMeal/CreateMeal';
import CreateEntry from '../createEntry/CreateEntry';
import CreateRoutine from '../createRoutine/CreateRoutine';

const HomeComp = ({image, name, description, view}) => {
    
    const [openPopup, setOpenPopup] = useState(false);
  
    return (
    <div className='homeCompContainer'>
        <div className="imgCont">
            <img src={image} alt="" />
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        {/* create */}
        <div className="buttons">
            <div className="createButton">
                <button onClick={() => setOpenPopup(true)}><FontAwesomeIcon icon={faPlus} /></button>
                <p>Add</p>
            </div>
            {/* view */}
            <div className="viewButton">
                <Link to={view}>
                    <button><FontAwesomeIcon icon={faEye} /></button>
                </Link>
                <p>View</p>
            </div>
        </div>
        {openPopup && name == "meals" && <CreateMeal setOpen={setOpenPopup} />}
        {openPopup && name == "entries" && <CreateEntry setOpen={setOpenPopup} />}
        {openPopup && name == "routines" && <CreateRoutine setOpen={setOpenPopup} />}
    </div>
  )
}

export default HomeComp