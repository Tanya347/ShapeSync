import '../../popUp.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import axios from "axios"
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/authContext';

const CreateEntry = ({ setOpen }) => {

    const { user } = useContext(AuthContext);
    const [info, setInfo] = useState({});
    const {data} = useFetch(`/classes/${user.class}`)

    // set the usestate to the data user passed 
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    // post the usestate to database
    const handleClick = async (e) => {
        e.preventDefault();

        const newQuery = {
            ...info, author: user.name
        }
        try {
            await axios.post("http://localhost:5500/api/queries", newQuery, {
                withCredentials: false
            })
            setOpen(false)
            console.log(newQuery)
        }
        catch (err) {
            console.log(err)
        }
    }

    console.log("first")

    return (
        <div className="modal">
            <div className="mContainer">
                
            <FontAwesomeIcon icon={faXmark} className="mClose" onClick={() => setOpen(false)}/>

                <div className="mTitle">Send Query</div>

                <form>
                    <input
                        className="formInput"
                        type="text"
                        onChange={handleChange}
                        id="title"
                        placeholder='Enter your query title'
                    />
                    <textarea
                        name="Query"
                        id="description"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                        placeholder='Describe your query'>
                    </textarea>
                    <div className="formInput" id='options'>
                    <label>Choose Teacher</label>
                    <select id="queryTo">
                        <option key={0} value="none">-</option>
                        {
                            data?.subjects?.map((sub, index) => (
                               
                                <option key={index} value={sub.teacher._id}>{sub.teacher.teachername}</option>
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

export default CreateEntry