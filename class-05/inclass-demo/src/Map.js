import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <article>
        <h3>Map of {this.props.locationData.formatted_query}</h3>
        {this.props.map && 
        <img src={this.props.map} alt="placeholder" />
      }
      </article>

    );
  }
}

export default Map;
