import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { RoutesWithNotFound } from './utilities'
import HomePage from './pages/HomePage'
import PageLayout from './utilities/PageLayout'

function App() {

  return (
    <BrowserRouter>
      <PageLayout>
        <RoutesWithNotFound>
          <Route path='/' element={<HomePage />} />
        </RoutesWithNotFound>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
