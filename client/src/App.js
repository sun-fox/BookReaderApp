import React from 'react';
// import './App.css';

// Apollo Client Require
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

// Components
import BookList from './components/BookList'
import AddBook from './components/AddBook'

// Apoloo Client Setup
const client = new ApolloClient({
  uri:"http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Sunny's BookReader</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
