import showsData  from "../shows-data";

export function getShowByID(id) {
    const show=showsData.find(show =>show.id==id)
    return show
} 
