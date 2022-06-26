import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'
import { Router } from './routes/routes'
import { Provider } from "react-redux"
import { store } from "./redux/store";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
