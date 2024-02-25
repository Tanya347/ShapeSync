import '../../popUp.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import axios from "axios"
import { AuthContext } from '../../context/authContext';
import { category } from '../../data';

const CreateMeal = ({ setOpen }) => {

    const { user } = useContext(AuthContext);
    const [info, setInfo] = useState({});

    // set the usestate to the data user passed 
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    // post the usestate to database
    const handleClick = async (e) => {
        e.preventDefault();

        const newMeal = {
            ...info, author: user._id
        }
        try {
            await axios.post("http://localhost:2000/api/meals", newMeal, {
                withCredentials: false
            })
            setOpen(false)
            console.log(newMeal)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="modal">
            <div className="mContainer">
                
            <FontAwesomeIcon icon={faXmark} className="mClose" onClick={() => setOpen(false)}/>

                <div className="mTitle">Add Meal</div>

                <form>
                    <input
                        className="formInput"
                        type="text"
                        onChange={handleChange}
                        id="name"
                        placeholder='Enter your Meal name'
                    />
                    <textarea
                        name="Description"
                        id="description"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                        placeholder='Add nutrient details'>
                    </textarea>
                    <input
                        className="formInput"
                        type="text"
                        onChange={handleChange}
                        id="recipe"
                        placeholder='Add recipe links'
                    />
                    <input
                        className="formInput"
                        type="number"
                        onChange={handleChange}
                        id="time"
                        placeholder='Enter time in minutes'
                    />
                    <div className="formInput" id='options'>
                    <label>Choose Category</label>
                    <select id="category" onChange={handleChange}>
                        <option key={0} value="none">-</option>
                        {
                            category.map((c, index) => (
                               
                                <option key={index} value={c}>{c}</option>
                            ))
                        }
                    </select>
                    </div>
                </form>

                <button className="mButton" onClick={handleClick}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CreateMeal