import routeList from './routes'
import './App.scss'
import { doFilterRoute } from './filters'
import { useRoutes } from 'react-router-dom'

function App() {
  doFilterRoute(routeList)
  const routes = useRoutes(routeList)
  
  return (
    <div className="App">
      { routes }
    </div>
  )
}

export default App
