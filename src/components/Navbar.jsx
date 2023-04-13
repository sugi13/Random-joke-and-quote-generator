import { Link } from "react-router-dom"


export const Navbar = () =>{
    return (
        <div className="nav">
            <div className="brand">
                <h1>Randoms</h1>
            </div>
            <div className="links">
            <li>
                <Link to='/' className="Link">Home </Link>
            </li>
            
            <li>
                <Link to='/RandomJoke' className="Link">Random Joke</Link>
            </li>
            <li>
                <Link to='/RandomQuote' className="Link">Random Quote</Link>
            </li>
            </div>
        </div>
    )
}