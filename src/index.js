import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import App from './components/App.jsx';

const networkInterface = createNetworkInterface({
  uri: 'localhost:8000'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const history = createHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById('App')
)
