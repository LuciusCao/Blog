import React from 'react';
import { render } from 'react-dom';
import { Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import WebFont from 'webfontloader';

import Test from './components/Test.jsx';
import Home from './ayouts/Home.jsx';
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

render(
  <ApolloProvider client={client}>
    <HashRouter>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/blogs/tech' component={Articles}/>
        <Route path='/blogs/design' component={Test}/>
      </div>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('App')
)
