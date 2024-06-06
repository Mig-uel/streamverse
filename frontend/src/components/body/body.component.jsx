import { Outlet } from 'react-router-dom'

// UI Elements
import { BodyContainer } from './body.style'

const Body = ({ children }) => {
  return (
    <BodyContainer>
      <Outlet />
    </BodyContainer>
  )
}

export default Body
