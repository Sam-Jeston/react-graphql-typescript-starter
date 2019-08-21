import * as React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { getApolloClient } from './services'
import { BlockSelector } from './components'

const App = () => (
  <ApolloProvider client={getApolloClient('http://localhost:4000')}>
    <BlockSelector />
  </ApolloProvider>
);

render(<App />, document.getElementById('root'))