'use strict';

const axios = require('axios');

let cache = {};

// use this if you are doing .then().catch()
function getImages(request, response) {
  let imageType = request.query.imageType;
  let key = imageType + 'images';

  if (cache[key] && Date.now() - cache[key].timestamp < (1000 * 20)) {
    console.log('Cache hit, images present, HURRAY!');
    response.send(cache[key].data);
  } else {
    console.log('Cache miss, images NOT present, Let\'s cache it!');

    let url = `https://api.unsplash.com/search/photos`;
    let params = {
      client_id: process.env.UNSPLASH_ACCESS_KEY,
      query: imageType
    };

    axios.get(url, { params })
      .then(pictureResults => {
        let groomedImages = pictureResults.data.results.map(pic => new Picture(pic));

        cache[key] = {
          data: groomedImages,
          timestamp: Date.now()
        };

        return groomedImages;
      })
      .then(groomedImages => response.send(groomedImages))
      .catch(err => console.error(err));

  }

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
