import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './screens/HomePage.js'
import ProjectsPage from './screens/ProjectsPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ProjectDetail from './screens/ProjectDetail.js'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/issues/:project' children={<ProjectDetail />} />
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default App
