import AttractionForm from "./AttractionForm";

const Sidebar = (props) => {
    const place = props.place;
    return (
        <div className="show-left">
            <h1>Attractions</h1>
            {place.attractions.map((attraction) => {
                return(
                    <>
                    <span key={attraction}>{attraction}</span><br />
                    </>
                )
            })}
            <AttractionForm place={place} updatePlace={props.updatePlace} />
        </div>
    )
}

export default Sidebar