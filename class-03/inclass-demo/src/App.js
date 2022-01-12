// do this every time - it is a given for a react component
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hearts: '♥️',
      // originally set to true for proof of life
      show: false, 
      person: 'Unknown Name'
    }
  }

  addHearts = (name) => {
    console.log(`${name} was clicked`)
    this.setState({
      hearts: this.state.hearts + '♥️'
    })
  }

  handleShowModal = (name) => {
    this.setState({
      show: true,
      person: name
    })
  }

  handleCloseModal = () => {
    this.setState({
      show: false
    })
  }

  render(){
    return(
      <>
        <Header hearts={this.state.hearts}/>

        <Modal centered show={this.state.show} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.person}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.person.split(' ')[0]} is an important part of our community!
          </Modal.Body>
        </Modal>

        <Main 
          data={data} 
          addHearts={this.addHearts} 
          handleShowModal={this.handleShowModal}
        />
        <Footer />
      </>
    );
  }
}

// do this every time, but not the only way to do it
export default App;

