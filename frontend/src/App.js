import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import { Container } from 'react-bootstrap'

import HomePage from './screens/HomePage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
