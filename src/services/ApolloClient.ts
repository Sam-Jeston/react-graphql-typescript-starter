import ApolloClient from 'apollo-boost'
let client: ApolloClient<unknown>

export function getApolloClient(serverUri: string) {
  if (!client) {
    client = new ApolloClient({
      uri: serverUri
    })
  }

  return client
}