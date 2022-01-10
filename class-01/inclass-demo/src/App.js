// do this every time - it is a given for a react component
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

import './App.css';

class App extends React.Component {
  render(){
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

// do this every time, but not the only way to do it
export default App;

