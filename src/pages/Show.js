import {useState, useEffect, useRef} from "react"
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Show/Sidebar";
import AttractionForm from "../components/Show/AttractionForm"
const Show = (props) => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const places = props.places;
  const [editForm, setEditForm] = useState({})
  useEffect(() => {
      if(props.places){
          const place = places.find((b) => b._id === id);
          setEditForm(place)
      }
  }, [props.places])
  if (props.places) {
    const place = places.find((b) => b._id === id);
    
    const handleChange = (event) => {
        const newState = {...editForm}
        newState[event.target.name] = event.target.value
        setEditForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updatePlace(editForm, place._id)
        navigate("/")
    }

    const removePlace = () => {
        props.deletePlace(place._id)
        navigate("/")
    }

    const form = (
        <form onSubmit={handleSubmit} class="updateForm">
            <input
            type="text"
            value={editForm.city}
            name="city"
            placeholder="City"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.country}
            name="country"
            placeholder="Country"
            onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.description}
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.img}
              name="img"
              placeholder="Image URL"
              onChange={handleChange}
            />
          <input type="submit" value="Update Place" />
        </form>
      );
      return (
        <div className="place show">
          <Sidebar place={place} updatePlace={props.updatePlace} />
          <div className="show-right">
            <h1>{place.city}, {place.country}</h1>
            <img src={place.img} />
            {form}
            <button onClick={removePlace} class="delete-button">Delete</button>
          </div>
        </div>
      );
    
  } else {
    return (
      <p>Loading...</p>
    )
  }
};

export default Show;