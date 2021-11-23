import {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const Main = (props) => {
    // State to hold our list of places
    const [places, setPlaces] = useState(null)

    // your deployed heroku URL
  const URL = "https://penguin-travel-app.herokuapp.com/place/"

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
  const createPlace = async (place) => {
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
  const updatePlace = async (place, id) => {
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
const deletePlace = async (id) => {
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
        <Index places={places} createPlace={createPlace}/>
        } />
        <Route path="/place/:id" element={
        <Show places={places} updatePlace={updatePlace} deletePlace={deletePlace}/>} 
        />
      </Routes>
    </main>
  );
}

export default Main;