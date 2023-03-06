import React, { useEffect, useState } from 'react'


const RandomBeer = () => {
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setBeer(response)
            })
            .catch((error) => console.log(error))
    }, [])
    if (!beer) {
        return <div className='Loading'>Loading...</div>
    }
    return (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.countributed_by}</p>
        </div>
    )
}

export default RandomBeer