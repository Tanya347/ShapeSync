import React from 'react'
import "./homeComp.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye} from '@fortawesome/free-solid-svg-icons'


const HomeComp = ({image, name, description, view}) => {
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
                <button><FontAwesomeIcon icon={faPlus} /></button>
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
        <button></button>
    </div>
  )
}

export default HomeComp