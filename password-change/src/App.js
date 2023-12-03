import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from 'apollo-link-context';

import './App.css';
import Pages from './pages';

const uri = 'https://surya-yoga-api.vercel.app/api';
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authlink = setContext(async (_, { headers }) => {
        return {
            headers: {
                ...headers,
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
