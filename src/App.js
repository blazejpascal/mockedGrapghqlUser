import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import createApolloClient from './core/createApolloClient'
import UsersForArticle from './components/UsersForArticle/UsersForArticle'

const client = createApolloClient()

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <UsersForArticle />
        </div>
      </ApolloProvider>
    );
  }
}

export default App

