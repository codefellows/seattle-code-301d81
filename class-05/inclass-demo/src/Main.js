import React from 'react';
import Map from './Map.js';
import Restaurants from './Restaurants.js';
import Weather from './Weather.js';


import location from './fake-data/location.json';
import restaurants from './fake-data/restaurants.json';
import weather from './fake-data/weather.json';

import map from './images/map.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      locationData: location,
      restaurantData: restaurants,
      weatherData: weather,

      city: ''
    }
  }
  // form with a label, input, button(so user knows they are triggering action)

  // with button, show data - something in state?  "showResults" if seattle

  // conditional render - map, list of restaurants, list of weather info
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      city: e.target.city.value,
      // there is also a bug here.  we'll look at it on Monday!
      showResults: this.state.city === 'seattle'
    })
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <label>Pick a City!
            <input name="city" type="text" />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {
          this.state.showResults && 
          <>
            <Map locationData={this.state.locationData} map={map}/>
            <Restaurants
              restaurantData={this.state.restaurantData}
              locationData={this.state.locationData}
            />
            <Weather 
                weatherData={this.state.weatherData} 
                locationData={this.state.locationData}
            />
          </>
        }

      </main>
    );
  }
}

export default Main;
