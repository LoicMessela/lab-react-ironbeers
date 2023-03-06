import axios from 'axios'
import React, { useState } from 'react'


const NewBeer = () => {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirstbrewed] = useState('');
    const [brewers_tips, setBrewertips] = useState('');
    const [attenuation_level, setAttenuation] = useState(0);
    const [contributed_by, setContributed] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }
        try {
            const res = await axios.post(
                'https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input onChange={(event) => setName(event.target.value)}
                    value={name}
                    type="text"
                    name="name"
                />
            </div>
            <div>
                <label htmlFor='tagline'>tagline:</label>
                <input onChange={(event) => setTagline(event.target.value)}
                    value={tagline}
                    type="text"
                    name="tagline"
                />
            </div>
            <div>
                <label htmlFor='description'>description:</label>
                <input onChange={(event) => setDescription(event.target.value)}
                    value={description}
                    type="text"
                    name="description"
                />
            </div>
            <div>
                <label htmlFor='first_brewed'>first_brewed:</label>
                <input onChange={(event) => setFirstbrewed(event.target.value)}
                    value={first_brewed}
                    type="text"
                    name="first_brewed"
                />
            </div>
            <div>
                <label htmlFor='brewers_tips'>brewer_tips:</label>
                <input onChange={(event) => setBrewertips(event.target.value)}
                    value={brewers_tips}
                    type="text"
                    name="first_brewed"
                />
            </div>
            <div>
                <label htmlFor='attenuation_level'>attenuation_level:</label>
                <input onChange={(event) => setAttenuation(event.target.value)}
                    value={attenuation_level}
                    type="number"
                    name="attenuation_level"
                />
            </div>
            <div>
                <label htmlFor='contributed_by'>contributed_by:</label>
                <input onChange={(event) => setContributed(event.target.value)}
                    value={contributed_by}
                    type="text"
                    name="contributed_by"
                />
            </div>
            <button type="submit">ADD NEW</button>
        </form>

    )
}

export default NewBeer