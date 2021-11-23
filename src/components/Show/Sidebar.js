import AttractionForm from "./AttractionForm";

const Sidebar = (props) => {
    const place = props.place;
    return (
        <div className="show-left">
            <h1>Attractions</h1>
            {place.attractions.map((attraction) => {
                return(
                    <>
                    <span class="attraction" key={attraction}>{attraction}</span>
                    </>
                )
            })}
            <AttractionForm place={place} updatePlace={props.updatePlace} />
        </div>
    )
}

export default Sidebar