import { BrowserRouter, Route } from 'react-router-dom'
import { RoutesWithNotFound } from './utilities'
import PageLayout from './utilities/PageLayout'
import { HomePage } from './pages'

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
