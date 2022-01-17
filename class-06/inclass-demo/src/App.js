import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPokemonData: false,
      pokemonData: [],
      renderError: false,
      errorMessage: '',
      searchQuery: '',
      cityData: {}
    }
  }

  // we async if doing an asynchronous operation
  handlePokemonClick = async () => {
    console.log('button clicked');

    try {
      // if ansyrchonous, and we need to wait for data to come back, we use the keyword await
      let pokemonResults = await axios.get('https://pokeapi.co/api/v2/pokemon')

      // get proof of life, then remove console.log when you move on!!!
      // console.log('results: ', pokemonResults.data);
      this.setState({
        displayPokemonData: true,
        pokemonData: pokemonResults.data.results
      })
    } catch (error) {
      // leaving as an example
      // console.log('houston, we have a problem');
      // console.log('my error', error.response)

      this.setState({
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status}, ${error.response.data}`

      })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let city = e.target.city.value
    this.setState({
      searchQuery: e.target.city.value,
    });
    this.getCityInfo(city);
  }

  getCityInfo = async (city) => {
    try {let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_ACCESS_TOKN}&q=${city}&format=json`;

    console.log(url);
    let cityResults = await axios.get(url);

    console.log(cityResults.data[0]);
    this.setState({
      cityData: cityResults.data[0]
    })} catch(error){
      this.setState({
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status}, ${error.response.data.error}`

      })
    }
  }


  // example of img src:  `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_ACCESS_TOKEN}&center=45.5,-122.6&zoom=10`

  // request:  
  // mapUrl       key         accessToken      center         lat,lon
  // <baseUrl>?<query key 1>=<query value 1>&<query key 2>=<query value 2>
  render() {
    console.log(this.state);

    let pokemonToRender = this.state.pokemonData.map((pokemon, idx) => (
      <p key={idx}>{pokemon.name}</p>
    ))
    return (
      <>
        <header>
          <h1>Pokemon Information</h1>
        </header>
        <main>
          <button onClick={this.handlePokemonClick}>Show Pokemon Info</button>
          {this.state.displayPokemonData ? pokemonToRender : ''}
          {this.state.renderError && <p>{this.state.errorMessage}</p>}

          <form onSubmit={this.handleSubmit}>
            <label>Pick a City!
              <input name="city" type="text" />
            </label>
            <button type="submit">Explore!</button>
          </form>
        </main>
      </>
    );
  }
}

export default App;
