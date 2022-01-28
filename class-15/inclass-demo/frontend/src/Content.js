import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated){
      // from auth0 docs 
      const responseFromAuth0 = await this.props.auth0.getIdTokenClaims();
      // VERY IMPORTANT.  Double underscore!!!
      const jwt = responseFromAuth0.__raw;
      console.log(jwt);

      //as per axios docs.  take extra care with property names.  they  are specific
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/books',
        headers: { "Authorization": `Bearer ${jwt}`}
      }

      const bookResponse = await axios(config);
      this.setState({ books: bookResponse.data})
    }
  }

  componentDidMount () {
    this.getBooks();
  }

  render() {
    console.log(process.env.REACT_APP_SERVER_URL)
    return (
      <>
        <h1>Welcome {this.props.auth0.user.given_name}</h1>

        <h2>Books.... We Hope</h2>
        {
          this.state.books.length > 0 &&
          this.state.books.map(book => <li key={book._id}>{book.title}</li>)
        }

      </>
    );
  }
}


// notice how we use auth) in any any component "withAuth0"
export default withAuth0(Content);
