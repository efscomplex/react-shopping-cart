import React from 'react'
import {
   ApolloClient,
   NormalizedCacheObject,
   InMemoryCache,
   ApolloProvider,
} from '@apollo/client'

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
   cache: new InMemoryCache(),
   uri: 'http://localhost:4000/',
})

export default function withApolloClient(Comp: React.FC) {
   return (props: any) => (
      <ApolloProvider client={client}>
         <Comp {...props} />
      </ApolloProvider>
   )
}
