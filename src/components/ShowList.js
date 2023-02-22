import Show from './Show'

function ShowList(props) {

    return(
        <div className ='ShowList'>
       { props.shows.map( x=> <Show key={x.id} showObject={x} /> )}
    </div>
       )


}

export default ShowList