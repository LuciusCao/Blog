import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'localhost:8888'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});
