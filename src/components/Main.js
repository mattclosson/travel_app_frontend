import {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Index from "../pages/index"
import Show from "../pages/Show"

const Main = (props) => {
    // State to hold our list of places
    const [places, setPlaces] = useState(null)

    // your deployed heroku URL
  const URL = "https://travel-backend.herokuapp.com/travel/"

  // function to get updated list of places
  const getPlaces = async () => {
    // make the api call
    const response = await fetch(URL)
    // turn the response in an object
    const data = await response.json()
    // set the state to the api data
    setPlaces(data)
}

  // function that will later be passed data from our new/create form and make the post request to create a new place
  const createPlaces = async (bookmark) => {
    // make the post request to our API
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(place)
    })

    // get updated list of place
    getPlaces()
}
  // function to update a place
  const updatePlaces = async (place, id) => {
    // make the put request
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(place)
    })
    // update the list of place
    getPlaces()
}

// create function to delete a place
const deletePlaces = async (id) => {
    // make the delete request
    await fetch(URL + id, {
        method: "delete"
    })
    // update the list of places
    getPlaces()
}



   // a useEffect to make a call to getPlace when page loads
   useEffect(() => {
    getPlaces()
}, [])

return (
    <main class="mdc-top-app-bar--fixed-adjust">
      <Routes>
        <Route path="/" element={
        <Index places={places} createPlaces={createPlaces}/>
        } />
        <Route path="/place/:id" element={
        <Edit places={places} updatePlaces={updatePlaces} deletePlaces={deletePlaces}/>} 
        />
      </Routes>
    </main>
  );
}

export default Main;