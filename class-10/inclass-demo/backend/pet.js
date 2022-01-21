'use strict';

const petData = require('./data/pets.json');

let cache = {};

// most directly translates to try catch users.
function getPets(request, response) {
  let species = request.query.species;
  let key = species + 'pets';
  // cache validation:  is my data still good, if NOT, recache
  if (cache[key] && Date.now() - cache[key].timestamp < (1000 * 10)){
    console.log('Cache hit, pets present, HURRAY!');
    response.send(cache[key].data);
  } else {
    console.log('Cache miss, pets NOT present, Let\'s cache it!');

    let filteredPets = petData.filter(pet => pet.species === species);
    let groomedPetData = filteredPets.map(pet => new Pet(pet));
    cache[key] = {
      data: groomedPetData,
      timestamp: Date.now()
    };
    response.send(groomedPetData);
  }


}

class Pet {
  constructor(pet) {
    this.name = pet.name;
    this.breed = pet.breed;
  }
}

module.exports = getPets;
