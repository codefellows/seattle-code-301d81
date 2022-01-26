import React from 'react';

import axios from 'axios';
import Cats from './Cats';
import { Container, Button, Form } from 'react-bootstrap';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      showUpdateForm: true
    }
  }

  getCatsInfo = async () => {
    let url = `${SERVER}/cats`;
    if (this.state.location) {
      url = `${SERVER}/cats?location=${this.state.location}`
    }

    let catData = await axios.get(url)

    // console.log(catData.data)
    this.setState({
      cats: catData.data
    })
  }

  makeCat = async (newCat) => {
    let url = `${SERVER}/cats`;
    let catResult = await axios.post(url, newCat);
    // console.log(catResult.data);
    this.setState({
      cats: [...this.state.cats, catResult.data]
    })
  }

  deleteCat = async (id) => {
    let url = `${SERVER}/cats`;
    // note there is a SLASH there.  important!
    await axios.delete(`${url}/${id}`)
    const updatedCats = this.state.cats.filter(cat => cat._id !== id);
    this.setState({ cats: updatedCats });

  }

  updateCat = async (catToUpdate) => {
    let url = `${SERVER}/cats`;
    try {
      let updatedCatFromDB = await axios.put(`${url}/${catToUpdate._id}`, catToUpdate);
      let updatedCats = this.state.cats.map(existingCat => existingCat._id === updatedCatFromDB.data._id ? updatedCatFromDB.data : existingCat);
      console.log(updatedCats)
      this.setState({ cats: updatedCats })
    } catch (err) {
      console.error(err)
    }

  }

  componentDidMount() {
    this.getCatsInfo();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getCatsInfo(this.state.location)
  }

  handleCatSubmit = (e) => {
    e.preventDefault();
    let newCat = {
      name: e.target.name.value,
      color: e.target.color.value,
      location: e.target.location.value,
      hasClaws: e.target.hasClaws.checked
    }
    // console.log(newCat);
    this.makeCat(newCat);
  }

  render() {
    console.log(this.state.cats);

    return (
      <>
        <h1>Cats</h1>
        <form onSubmit={this.handleSubmit}>
          <label>EnterLocation
            <input onChange={(e) => this.setState({ location: e.target.value })} />
          </label>
          <button> Show me cats on location!</button>
        </form>

        <Container>
          <Form onSubmit={this.handleCatSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="hasClaws">
              <Form.Check type="checkbox" label="has-claws" />
            </Form.Group>
            <Button type="submit">Add Cat</Button>
          </Form>

        </Container>


        <h3>Cats in DB</h3>
        {
          this.state.cats.length > 0 ?
            <Cats cats={this.state.cats} deleteCat={this.deleteCat} updateCat={this.updateCat}/>
            : <p>No Cats in Database</p>
        }

        
      </>
    );
  }
}

export default App;
