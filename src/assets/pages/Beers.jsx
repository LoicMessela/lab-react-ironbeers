import React, { useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom'



const Beers = () => {
    const [beers, setBeers] = useState(null)
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setBeers(response)
            })
            .catch((error) => console.log(error))
    }, [])
    console.log('Beers state: ', beers)

    if (!beers) {
        return <div className='Loading'>Loading...</div>
    }
    return (
        <div>
            {beers.map((beer) => {
                return (
                    <div>
                        <img src={beer.image_url} width="100" height="100" alt="" />
                        <Link to={"/beers/" + beer._id}> <h3>{beer.name}</h3></Link>
                        <h4>{beer.tagline}</h4>
                        <p>{beer.contributed_by}</p>
                    </div>
                )
            })}
        </div>

    )
}

export default Beers