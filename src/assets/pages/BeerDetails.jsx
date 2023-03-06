import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const BeerDetails = () => {
    const params = useParams()
    console.log(params)
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/' + params.beerId)
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setBeer(response)
                console.log(response)
            })
            .catch((error) => console.log(error))
    }, [params.beerId])
    if (!beer) {
        return <div className='Loading'>Loading...</div>
    }
    return (
        <div>
            <img src={beer.image_url} alt="" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.countributed_by}</p>
        </div>
    )
}

export default BeerDetails