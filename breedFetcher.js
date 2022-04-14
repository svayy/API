const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedGen = breedName.breedGen(0,3)
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breeds/search?q=${breed}}`), (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length !== 0) {
      desc = JSON.parse(body)[0]["description";]
    }
  }
}
