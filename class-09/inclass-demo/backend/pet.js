'use strict';

const petData = require('./data/pets.json');

function getPets(request, response) {
  let species = request.query.species;

  // gives proof of life in the TERMINAL
  console.log(species);
  let filteredPets = petData.filter(pet => pet.species === species);
  let groomedPetData = filteredPets.map(pet => new Pet(pet));
  response.send(groomedPetData);
}

class Pet {
  constructor(pet) {
    this.name = pet.name;
    this.breed = pet.breed;
  }
}

module.exports = getPets;
