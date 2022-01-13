import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

import  Form from 'react-bootstrap/Form';

import './App.css';
let numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      word: '',
      numbers:  numsArr,
      selected: 'all'
    }
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleWord = event => {
    this.setState({
      word: event.target.value
    })
  }

  handleNumbers = event => {
    let newNumsArr = numsArr;
    let selected = event.target.value;

    if(selected === 'even'){
      newNumsArr = numsArr.filter(num => num % 2 === 0);
    }

    if(selected === 'odd'){
      newNumsArr  = numsArr.filter(num  => num  % 2 !== 0);
    }

    this.setState({
      selected: event.target.value,
      numbers: newNumsArr
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let word = e.target.word.value;
    let selected = e.target.selected.value;

    console.log(name, word, selected)
  }

  render() {
    // console.log(this.state);
    let nums = this.state.numbers.map(num => <ListGroup.Item key={num}>{num}</ListGroup.Item>)
    return (
      <>
        <header>
          <h1>In-FORM-ed {this.state.name}</h1>
          {this.state.word ? <h3>{this.state.word} is the word</h3> : null}
        </header>
        <main>
          {/* <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Ponderings</legend>

              <label>Name
                <input name="name" onInput={this.handleName}/>
              </label>

              <label htmlFor="word">Word</label>
              <input name="word" id="word" onChange={this.handleWord} />

              <label htmlFor="selected">Make A Choice</label>
              <select name="selected" id="selected" onChange={this.handleNumbers}>
                <option value="all">All</option>                
                <option value="odd">Odd</option>
                <option value="even">Even</option>
              </select>

              <button type="submit">Submit</button>
            
            </fieldset>

          </form> */}
          <Container>
            <Form style={{width: '50%', margin: 'auto'}}>
              {/* <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" onInput={this.handleName} />
              </Form.Group>
              <Form.Group controlId="word">
                <Form.Label>Word:</Form.Label>
                <Form.Control type="text" onInput={this.handleWord} />
              </Form.Group> */}
              <Form.Group controlId="selected">
                <Form.Select onChange={this.handleNumbers}>
                  <option>Make a Choice</option>
                  <option value="all">All</option>                
                  <option value="odd">Odd</option>
                  <option value="even">Even</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>
          <Container>
            <ListGroup>
              {nums}
            </ListGroup>
          </Container>
        </main>
        
      </>
    );
  }
}

export default App;
