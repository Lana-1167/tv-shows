import { searchForShow } from "../helpers/showHelper";


function Search () {
    return (
        <>
        <h1>Search</h1>
        <input type="text" onChange={searchShows} />
        </>
    )
}

function searchShows(event) {
   const searchText = event.target.value 
   console.log(searchForShow(searchText))
}



export default Search