import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    return (
        <div className="Header">
            <div className="Logo"></div>
        <ul className="Navigation">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>           
            <Link to="/favorites">Favorites</Link>
            </li>
            <li>
            <Link to="/upcoming">Upcoming</Link>
            </li>
  
        </ul>
        <div className="Search">
            <input type="text" onChange={handleSearch} />
        </div>
        </div>
    )
    function handleSearch (event){
        if (event.target.value.trim()=== "") {
            navigate("/")
        }else{

        navigate("/search/" + event.target.value.trim())
        }
    }
}

export default Header