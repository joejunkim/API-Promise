const fetch = require('node-fetch');
let personObj = undefined;

let getPerson = function(num) {
    fetch(`https://swapi.dev/api/people/${num}/`)
        .then(response => response.json())
}

getPerson(1)
    .then(person => {
        console.log('Name: ', person.name)
    })
    .then(() => {
        console.log(getPerson(1))
        return fetch(getPerson(1).homeworld).then(response => response.json())
    })
    .then(planet => {
        console.log('Planet: ', planet.name)
    })

    // .then(planet => {
    //     console.log('Planet: ', planet.name)
    //     return personObj.films
    // })
    // .then(films => {
    //     let filmArray = films.map(film => {
    //         return fetch(film).then(response => response.json())
    //     })
    //     Promise.all(filmArray).then((films) => {
    //         console.log('Films: ', films.map(film => film.title).join(', '));
    //     });
    // })
