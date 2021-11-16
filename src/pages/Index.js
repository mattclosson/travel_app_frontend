import {useState} from "react"
import { Link } from "react-router-dom";

const Index = (props) => {

    // state to hold form data
    const [newForm, setNewForm] = useState({
        city: "",
        country: "",
        img: "",
        description: ""
    })

    //handleChange function to sync input with state
  const handleChange = (event) => {
    // make a copy of state
    const newState = {...newForm}
    // update the newState
    newState[event.target.name] = event.target.value
    // update the state
    setNewForm(newState)
}

// handleSubmit function for when form is submitted
const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault()
    // pass the form data to createBookmark function
    props.createBookmarks(newForm)
    // reset the form to empty
    setNewForm({
        city: "",
        country: "",
        img: "",
        description: ""
   })
}

    const form = <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={newForm.city}
        name="city"
        placeholder="city"
        onChange={handleChange}
        />
        <input
        type="text"
        value={newForm.country}
        name="country"
        placeholder="country"
        onChange={handleChange}
        />
          <input
        type="text"
        value={newForm.img}
        name="img"
        placeholder="img"
        onChange={handleChange}
        />
        <input type="submit" value="Create Destination"/>
    </form>

if (props.places) {
    return (
      <section>
        {form}
        {props.places.map((place) => {
          return (
            <div key={place._id} className="place">
              <h1>{place.city}, {place.country}</h1>
                <Link to={`/place/${bookmark._id}`}>
                <img src={place.image} alt={place.city}/>
              </Link>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    );
  }
};



export default Index;