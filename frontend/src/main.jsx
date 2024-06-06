import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// Routes
import Home from './screens/home.screen.jsx'
import Movies from './screens/movies.screen.jsx'
import Shows from './screens/shows.screen.jsx'
import Auth from './screens/auth.screen.jsx'

// UI Elements
import App from './App.jsx'
import Body from './components/body/body.component.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route element={<Body />}>
        <Route index path='' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/auth' element={<Auth />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
