import React from 'react';

class Person extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <img 
          src={this.props.imageUrl} 
          alt={this.props.name} 
          title={this.props.name}
        />
      </article>
    );
  }
}

export default Person;
