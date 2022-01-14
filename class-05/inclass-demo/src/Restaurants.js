import React from 'react';

class Restaurants extends React.Component {
  render(){

    let businesses = this.props.restaurantData.map((business, idx) => (
      <li key={idx}>
        <p>Name: {business.restaurant}</p>
        <p>{business.cuisines} in {business.locality}</p>
      </li>
    ));

    return(
      <article>
        <h3>Restaurants in {this.props.locationData.search_query}</h3>
        <ul>
          {this.props.restaurantData && businesses}
        </ul>
      </article>
    )
  }
}

export default Restaurants;
