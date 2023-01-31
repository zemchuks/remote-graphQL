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
      <main>
        <div className=''>
          <Clients />
        </div>
      </main>
        
      </ApolloProvider>
   
    </>
    
  )
}

export default App