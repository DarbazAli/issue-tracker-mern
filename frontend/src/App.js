import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import HomePage from './screens/HomePage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default App
