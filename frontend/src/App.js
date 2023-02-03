import Header from './components/Header'
import Clients from './components/Clients'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})
const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
      <>
        <div className="w-3/4 md:w-2/3 py-10 mx-auto">
          <Clients />
        </div>
        </>
        
      </ApolloProvider>
   
    </>
    
  )
}

export default App