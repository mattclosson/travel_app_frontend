import {useState} from "react"
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel';
import CarouselData from '../components/CarouselData';




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
    // pass the form data to createPlace function
    props.createPlace(newForm)
    // reset the form to empty
    setNewForm({
        city: "",
        country: "",
        img: "",
        description: ""
   })
}

    const form = <form onSubmit={handleSubmit} class="addPlaceForm">
        <input
        type="text"
        value={newForm.city}
        name="city"
        placeholder="City"
        onChange={handleChange}
        />
        <input
        type="text"
        value={newForm.country}
        name="country"
        placeholder="Country"
        onChange={handleChange}
        />
          <input
        type="text"
        value={newForm.img}
        name="img"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input type="submit" value="Create Destination"/>
    </form>

if (props.places) {
    return (
      <section>
        {form}
        <h2 className="top_heading">Specials</h2>
        <Carousel carouselImgs={CarouselData}/>
        <div className="header">
        <h1>Destinations</h1>
        </div>
        {props.places.map((place) => {
          return (
            <div key={place._id} className="place">
              <h1 className="placesNames">{place.city}, {place.country}</h1>
                <Link to={`/place/${place._id}`}>
                <img src={place.img} alt={place.city}/>
              </Link>
              <p><i>{place.description}</i></p>
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
