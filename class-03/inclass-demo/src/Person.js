import React from 'react';
import Button from 'react-bootstrap/Button';

import './Person.css';

class Person extends React.Component {
  // this is just how you set up state
  constructor(props) {
    super(props);
    this.state = {
      waves: 0,
      needsHelp: false
    }
  }

  handleWave = () => {
    //setState takes in an object
    this.setState({
      waves: this.state.waves + 1
    })
  }

  needsHelp = () => {
    this.setState({
      needsHelp: true
    })
  }

  helpGiven = () => {
    this.setState({
      needsHelp: false
    })
  }


  render() {
    // console.log(this.props);
    //ternary:  wtf
    return (
      <article>
        <h2 onClick={this.handleWave}>{this.props.name}</h2>
        <p>👋: {this.state.waves}</p>
        <img
          src={this.props.imageUrl}
          alt={this.props.name}
          title={this.props.name}
          onClick={() => this.props.addHearts(this.props.name)}
        />

        <p>{this.state.needsHelp ? 'I Need Help!' : ''}</p>
        <Button variant="info" onClick={this.needsHelp}>Help!</Button>
        <Button variant="success" className="right-button" onClick={this.helpGiven}>Thanks for Help!</Button>
        <Button 
          variant="warning" 
          onClick={() => this.props.handleShowModal(this.props.name)}
        >
          ?
        </Button>
      </article>
    );
  }
}

export default Person;
