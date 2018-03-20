import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.github.com/graphql' }),
  cache: new InMemoryCache()
});
// const authLink = setContext((_, { headers }) => {
//     let token = qeryStr.has('token') ? qeryStr.get('token') : localStorage.getItem('token');
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : null,
//         }
//     }
// });
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));
