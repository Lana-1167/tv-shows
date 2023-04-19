import { searchForShow } from "../helpers/showHelper";

import ShowList from "../components/ShowList";
import { useParams } from "react-router-dom";



function Search () {

    const params = useParams()

    const searchResults = searchForShow(params.searchText)

    return (
        <>
        <h1>Search</h1>
        {
            searchResults.length > 0 ? <ShowList shows={searchResults}/>
            :<h2>No shows found</h2>
        }
        </>
    )
}





export default Search