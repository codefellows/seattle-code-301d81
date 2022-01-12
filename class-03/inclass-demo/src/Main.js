import React from 'react';
import Person from './Person.js';

import './Main.css';

class Main extends React.Component {
  render() {
    
    // console.log(this.props)

    let peopleArray = this.props.data.map((individual, index) => (
      <Person
        key={index}
        addHearts={this.props.addHearts}
        handleShowModal={this.props.handleShowModal}
        name={individual.name}
        imageUrl={individual.image}
      />
    ));

    return (
      <main>
        {peopleArray}
      </main >
    );
  }
}

export default Main;
