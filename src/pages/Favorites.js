import { useEffect, useState } from "react";
import ShowList from "../components/ShowList";
import { getShowByID } from "../helpers/showHelper";

function Favorites() {
const [shows, setShows]=useState([]);
const favorites = JSON.parse(localStorage.getItem(`favorites`) || "[]");

useEffect (async () =>{
    const fetchShows = async () => {

    
    const promises = favorites.map((favorite)=>getShowByID (favorite));
    const shows = await Promise.all(promises);
    setShows(shows);
    }
fetchShows();

}, []);
    return (
        <div>
        
            <h2>This is the Favorites page</h2>
            <ul> 
            {shows.map((show) =>(
                <li>{show.name}</li>
            ))}
            </ul>
            <ShowList shows={shows}/>
        </div>
    )
}
export default Favorites