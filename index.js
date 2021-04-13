const fetch = require('node-fetch');
let personObj = undefined;

    fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
        return response.json()
    })
    .then(person => {
        personObj = person
        console.log(person.name)
        const homeworld = person.homeworld;
        return fetch(homeworld).then(response => response.json())
    })
    .then(planet => {
        console.log(planet.name)
        const films = personObj.films
        return films
    }).then(films => {
        let filmArray = films.map(film => {
            return fetch(film).then(response => response.json())
        })
        
    })
    
