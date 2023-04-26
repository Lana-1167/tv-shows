import showsData  from "../shows-data";


export function getShowByID(id) {
    const show=showsData.find(show =>show.id.toString() ===id)
    return show
} 

export function getHomeShows() {
    return showsData
}

export async function searchForShow(text) {
   const response = await fetch("https://api.tvmaze.com/search/shows?q=" + text)
    const jsonData = await response.json()
    const showResults = jsonData.map( element => element.show )
    
    return showResults
}