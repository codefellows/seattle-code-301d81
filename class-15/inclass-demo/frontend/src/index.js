import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// make the index a provider to WRAP around App
// docs from authO:
// https://manage.auth0.com/dashboard/us/dev-557yq6wx/applications/OslcN4hqn8mU4T44Og9UbMWOGtpkuCBd/quickstart

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
