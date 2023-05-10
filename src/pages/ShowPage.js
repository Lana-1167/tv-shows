import './ShowPage.css';

import { useParams } from "react-router-dom";
import { getShowByID } from "../helpers/showHelper";
import NotFound from "./NotFound";
import { useState, useEffect} from 'react';



function ShowPage () {
    const {showID} = useParams()
    
    const [show,setShow] = useState(undefined)

    useEffect( ()=>{
            const fetchShow =async () => {
            const showData = await getShowByID (showID)    
            setShow(showData)
        }
        fetchShow()
    }, [showID])

    
    if (!show) {
       return (<NotFound/>)
    }
    
    return (
    
        <div className="ShowPage">
            
                <h1>{show.name}</h1>
               
                <img src={show.image.medium}
                alt={ show.name}></img>
               
                <h2>Language: {show.language} </h2>
                <h3>Rating: {show.rating.average}</h3>
                <h4>Genres: {show.genres.join(', ')}</h4>
     
        </div>
    )
}
export default ShowPage