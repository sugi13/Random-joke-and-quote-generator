import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import twitterImg from '../assets/icons8-twitter-32.png';


export const RandomJoke = () =>{

    let [ApiContent, setApiContent] = useState('');

    let URL = `https://official-joke-api.appspot.com/random_joke`;

    function generateRandomJoke(){
        fetch(URL)
        .then((response)=> response.json())
        .then((data) => {
            setApiContent(data)
        });
    }

    useEffect(() => {
        generateRandomJoke()
    }, ['']);

    return (
        <div className="Random-Joke">
        <Navbar/>
        <div className="joke-container">
        <div className="joke-content">
            <h1>Get Random Joke 😜</h1>
            <div className="content">
                <p>{ApiContent.setup}</p>
                <p>{ApiContent.punchline}</p>
            </div>
            <div className="button">
                <button onClick={() => generateRandomJoke()} >Tell me Another</button>
                <div className="icon-img">
                    <img src= {twitterImg} alt="" />
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}