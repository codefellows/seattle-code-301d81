import React from 'react';

import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      catData: []
    }
  }

  getCatsInfo = async () => {
    let catData = await axios.get('http://localhost:3001/cats')

    // console.log(catData.data)
    this.setState({
      catData: catData.data
    })
  }

  componentDidMount () {
    this.getCatsInfo();
  }

  render() {
    console.log(this.state.catData);
    let things = this.state.catData.map((cat,index) => (
      <p key={index}>{cat.name} is {cat.color}</p>
    ))
    return (
      <>
        <h1>Cats</h1>

        <h3>Cats in DB</h3>
        {
          this.state.catData.length > 0 ?
          <>
          {things}
          </>
          : <p>No Books in Database</p>
        }
      </>
    );
  }
}

export default App;
