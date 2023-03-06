import { Link, Routes, Route } from 'react-router-dom';
// import {FaHouse} from "react-icons/fa";
import './App.css';
import Home from './assets/pages/Home';
import Beers from './assets/pages/Beers';
import NewBeer from './assets/pages/NewBeer';
import RandomBeer from './assets/pages/RandomBeer';
import BeerDetails from './assets/pages/BeerDetails';


function App() {
  return (
    <div className="App" >
    <nav style={{backgroundColor: "skyblue"  }}><Link to="/" >Home</Link></nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/beers" element={<Beers/>}/>
      <Route path='/beers/:beerId' element={<BeerDetails/>}/>
      <Route path="/random-beer" element={<RandomBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/> 
    </Routes>
    </div>
  );
}

export default App;
