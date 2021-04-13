const fetch = require('node-fetch');

fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
        return response.json()
    })
    .then(person => {
        const homeworld = person.homeworld;
        const fetchPlanet = fetch(homeworld).then(response => response.json());
        return fetchPlanet;
    })
    .then(planet => {
        console.log(planet.name);
    })
