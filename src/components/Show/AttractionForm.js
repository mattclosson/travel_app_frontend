import {useState, useEffect, useRef} from "react"
import { useParams, useNavigate } from "react-router-dom";

const AttractionForm = (props) => {
    const navigate = useNavigate()
    const place = props.place;
    const [editForm, setEditForm] = useState({})
    const handleChange = (event) => {
        const newState = {...editForm}
        newState[event.target.name] = event.target.value
        setEditForm(newState)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      // console.log(editForm.attractions)
      console.log(place.attractions)
      let newAttractions = [...place.attractions, editForm.attractions]
      // newAttractions = newAttractions.push(editForm.attractions)
      console.log(newAttractions)
      props.updatePlace({"attractions": newAttractions}, place._id)
      navigate("/")
    }

    const form = (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={editForm.attractionss}
            name="attractions"
            placeholder="Attraction"
            onChange={handleChange}
            class="attraction-input"
            />
          <input class="attraction-button" type="submit" value="Add Attraction" />
        </form>
      );
      return (
        <div>
            {form}
        </div>
      );
    
};

export default AttractionForm;