import { Navbar } from './components/Navbar';
import { RandomJoke } from './components/RandomJoke';
import { RandomQuote } from './components/RandomQuote';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element = {<Home/>}/>
        <Route path = 'RandomJoke' element = {<RandomJoke/>}/>
        <Route path = 'RandomQuote' element = {<RandomQuote/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


// https://type.fit/api/quotes/
// 