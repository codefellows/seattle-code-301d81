'use strict';

// import libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// import mongoose library so we can our mongo db
const mongoose = require('mongoose');
const { handle } = require('express/lib/application');

// must bring in our Cat Schema IF we want to interact with Cat models
const Cat = require('./model/cat');
const { response } = require('express');

// connect mongoose to our mongo DB
mongoose.connect(process.env.DB_URL);

// connection validation
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected')
});


// implement our Express server
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello From the SERVER!');
})

app.get('/cats', handleGetCats);


async function handleGetCats(req, res) {
  let queryObject = {};

  if (req.query.location) {
    queryObject = {
      location: req.query.location
    }

  }

  try {
    // return all results with an empty object, or enter object with location to get all cats for that location 
    let catsFromDb = await Cat.find(queryObject);
    if (catsFromDb.length > 0) {
      res.status(200).send(catsFromDb);
    } else {
      res.status(404).send('No Cats Found');
    }
  } catch(err){
    res.status(500).send('Server Error');
  }
}


app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
