import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import beersImg from "../beers.png"
import randomBeersImg from "../random-beer.png"
import newBeerImg from "../new-beer.png"
const Home = () => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to="/beers"><img src={beersImg} alt="" />
                        <h3>All Beers</h3>
                    </Link></li>
                    <li><Link to="/random-beer"><img src={randomBeersImg} /><h3>Random Beer</h3></Link></li>
                    <li><Link to="/new-beer"><img src={newBeerImg} /><h3>New Beer</h3></Link></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Home