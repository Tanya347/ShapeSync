import React from 'react'
import "./homeComp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye} from '@fortawesome/free-solid-svg-icons'


const HomeComp = ({image, name, description}) => {
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
                <button><FontAwesomeIcon icon={faEye} /></button>
                <p>Add</p>
            </div>
        </div>
        <button></button>
    </div>
  )
}

export default HomeComp