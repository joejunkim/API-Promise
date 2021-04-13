const fetch = require('node-fetch');

fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
        return response.json()
    })
    .then(person => {
        console.log(person);
    });
