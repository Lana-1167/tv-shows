import { Link } from "react-router-dom"


function Header() {
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
        <div className="Search"></div>
        </div>
    )
}

export default Header