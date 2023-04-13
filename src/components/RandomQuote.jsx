import { Navbar } from "./Navbar";
import { useState,useEffect } from "react";
import twitterImg from '../assets/icons8-twitter-32.png';

export const RandomQuote = () =>{

    let [Quote, setQuote] = useState('');

    useEffect(() =>{
        generateRandomQuote();
    }, []);

    function generateRandomQuote(){
        fetch(`https://dummyjson.com/quotes/random`)
        .then(response => response.json())
        .then(data => {
            setQuote(data);
        });
    }

    return(
        <div className="RandomQuote">
            <Navbar/>
            <div className="quote-container">
            <div className="quote-content">
            <h1>Get Random Quote !</h1>
            <div className="Content">
            <p>{Quote.quote}</p>
            <p>- {Quote.author}</p>
            </div>
            <div className="button">
                <button onClick={() => generateRandomQuote()}>Get Another One</button>
                <div className="icon-img">
                    <img src= {twitterImg} alt="" />
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}