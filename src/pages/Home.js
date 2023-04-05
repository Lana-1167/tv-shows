import ShowList from "../components/ShowList"
import {getHomeShows} from '../helpers/showHelper';

const showsData=getHomeShows()


function Home() {
    return (
        <>
        {
            !!showsData ?

        <div classname="HomePage">
        <h1>The Best TV Show App</h1>
        <ShowList shows={showsData}/>
        </div>
        :
        <h1> Couldn't load shows</h1>
        }
        </>
    )
}
export default Home