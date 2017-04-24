import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import WebFont from 'webfontloader';

import Test from './components/Test.jsx';
import Home from './layouts/Home.jsx';
import Articles from './layouts/Articles.jsx';

const WebFontConfig = {
  custom: {
    families: ['Balthazar','Roboto:regular,medium'],
    urls: ['../fonts/fonts.css']
  }
}

WebFont.load(WebFontConfig)

const networkInterface = createNetworkInterface({
  uri: 'localhost:8000'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const history = createHistory();

render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/blogs/tech' component={Articles}/>
        <Route path='/blogs/design' component={Test}/>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('App')
)
