'use strict';

const axios = require('axios');


function getImages(request, response) {
  let imageType = request.query.imageType;
  // console.log(imageType);
  let url = `https://api.unsplash.com/search/photos`;
  let params = {
    client_id: process.env.UNSPLASH_ACCESS_KEY,
    query: imageType
  };

  axios.get(url, { params })
    .then(pictureResults => pictureResults.data.results.map(pic => new Picture(pic)))
    .then(groomedImages => response.send(groomedImages))
    .catch(err => console.error(err));

}

class Picture {
  constructor(pic) {
    this.src = pic.urls.regular;
    this.alt = pic.alt_description;
    this.description = pic.description;
    this.photographer = pic.user.name;
  }
}


module.exports = getImages;
