import ShowList from "../components/ShowList"
import showsData from "../shows-data"


function Home() {
    return (
        <div classname="HomePage">
        <h1>The Best TV Show App</h1>
        <ShowList shows={showsData}/>
        </div>
    )
}
export default Home