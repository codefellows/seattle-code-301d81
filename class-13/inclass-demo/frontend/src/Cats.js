import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import UpdateCatForm from './UpdateCatForm';

class Cats extends React.Component {

  render() {
    return (
      <ListGroup>
        {this.props.cats.length && this.props.cats.map(cat => (
          <Cat key={cat._id} cat={cat} deleteCat={this.props.deleteCat} updateCat={this.props.updateCat}/>
        ))}
      </ListGroup>
    );
  }
}



class Cat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showUpdateForm: false
    }
  }

  render() {
    return (
      <>
        <ListGroup.Item>
          {this.props.cat.name} live in {this.props.cat.location}
          <span onClick={() => this.props.deleteCat(this.props.cat._id)}>[X]</span>
          <Button variant="secondary" onClick={() => this.setState({showUpdateForm: true})}>Update Cat</Button>
        </ListGroup.Item>
        {
          this.state.showUpdateForm &&
          <UpdateCatForm  cat={this.props.cat} updateCat={this.props.updateCat}/>

        }
      </>
    );
  }
}


export default Cats;
