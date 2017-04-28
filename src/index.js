import React from 'react';
import { render } from 'react-dom';
import { Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import WebFont from 'webfontloader';

import Test from './components/Test.jsx';
import Home from './layouts/Home.jsx';
import Posts from './layouts/Posts.jsx';

const WebFontConfig = {
  custom: {
    families: ['Balthazar','Roboto:regular,medium'],
    urls: ['../fonts/fonts.css']
  }
}

WebFont.load(WebFontConfig)

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8000/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface,
});

render(
  <ApolloProvider client={client}>
    <HashRouter>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/blogs/tech' component={Posts}/>
        <Route path='/blogs/design' component={Test}/>
      </div>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('App')
)
