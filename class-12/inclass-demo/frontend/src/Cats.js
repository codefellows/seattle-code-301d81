import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Cats extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.cats.length && this.props.cats.map(cat => (
          <Cat key={cat._id} cat={cat} deleteCat={this.props.deleteCat}/>
        ))}
      </ListGroup>
    );
  }
}

class Cat extends React.Component {

  render() {
    return (
      <ListGroup.Item>
        {this.props.cat.name} live in {this.props.cat.location} 
        <span onClick={() => this.props.deleteCat(this.props.cat._id)}>[X]</span>
      </ListGroup.Item>
    );
  }
}


export default Cats;
