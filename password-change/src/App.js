import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import './App.css';
import Pages from './pages';

const uri = 'http://localhost:8000/api';
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri, 
    cache,
})

function App() {
    return (
        <ApolloProvider client={client}>
            <Pages />
        </ApolloProvider>
    );
}

export default App;
