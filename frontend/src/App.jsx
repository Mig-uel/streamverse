import { Outlet } from 'react-router-dom'

// UI Elements
import { GlobalStyles } from './GlobalStyles'
import Header from './components/header/header.component'
import Body from './components/body/body.component'

function App() {
  return (
    <>
      <Header />
      <Body />
      <GlobalStyles />
    </>
  )
}

export default App
