import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

import './App.css';
import Pages from './pages';

const uri = 'http://localhost:8000/api';
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const currentURL = window.location.href;
const token = currentURL.split('/').pop()

const authlink = setContext(async (_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: token || ''
            } 
        } 
    }
)

const client = new ApolloClient({
    link: authlink.concat(httpLink),
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
