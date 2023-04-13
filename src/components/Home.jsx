import { RandomJoke } from "./RandomJoke";
import { Navbar } from "./Navbar";
import Illustration from '../assets/Ransom note letters-rafiki.png'

export const Home = () =>{
    return(
        
    <div className="Home-content">
    <Navbar/>
    <div className="content-layout">
        <div className="header">
        <p className="text">Get Quotes <br /> And Jokes Here <br /> Random.</p>
        </div>
        <div className="illustration">
        <img src= {Illustration}/>
        </div>
    </div>
    </div>
    )   
}

//https://type.fit/api/quotes/