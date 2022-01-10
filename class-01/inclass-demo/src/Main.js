import React from 'react';
import Person from './Person.js';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Person 
          name="Ryan Gallaway" 
          imageUrl="https://avatars.githubusercontent.com/u/40313258?v=4"
        />
        <Person 
          name="Hambalieu Jallow"
          imageUrl="https://avatars.githubusercontent.com/u/72369411?v=4"
        />
        <Person 
          name="Josh McCluskey"
          imageUrl="https://avatars.githubusercontent.com/u/72279987?v=4"
        />
      </main>
    );
  }
}

export default Main;
