import React from 'react'
import {
   ApolloClient,
   NormalizedCacheObject,
   InMemoryCache,
   ApolloProvider,
} from '@apollo/client'

type Opts = {
   cache?: any
   uri?: string
   devTools?: boolean
}
const defOpts = { devTools: true }

type Apollo = (opts?: Opts) => any //(client: ApolloClient<NormalizedCacheObject>)

const createApolloClient: Apollo = (opts = defOpts) =>
   new ApolloClient({
      cache: opts.cache || new InMemoryCache(),
      uri: opts.uri || 'http://localhost:4000/',
      connectToDevTools: opts.devTools,
   })

export default function withApolloClient(Comp: React.FC, opts?: any) {
   const client = createApolloClient(opts)
   return (props: any) => (
      <ApolloProvider client={client}>
         <Comp {...props} />
      </ApolloProvider>
   )
}
