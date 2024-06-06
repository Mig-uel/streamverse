import { Link } from 'react-router-dom'

// UI Elements
import { NavBar, NavTitle, NavActions } from './header.style'
import { FaTv } from 'react-icons/fa6'
import { FaHome, FaSignInAlt } from 'react-icons/fa'
import { MdLocalMovies } from 'react-icons/md'
import { useSyncExternalStore } from 'react'

const store = {
  size: {
    width: undefined,
  },
}

const getSnapshot = () => {
  if (store.size.width !== window.innerWidth)
    store.size = { width: window.innerWidth }
  return store.size
}

const subscribe = (callback) => {
  window.addEventListener('resize', callback)

  return () => window.removeEventListener('resize', callback)
}

const Header = () => {
  const { width } = useSyncExternalStore(subscribe, getSnapshot)

  return (
    <NavBar>
      <NavTitle>
        <Link to='/'>Streamverse</Link>
      </NavTitle>

      <NavActions>
        <Link to='/'>
          <FaHome /> Home
        </Link>
        <Link to='/movies'>
          <MdLocalMovies /> Movies
        </Link>
        <Link to='/shows'>
          <FaTv /> Shows
        </Link>
        <Link to='/acount'>
          <FaSignInAlt /> Sign In
        </Link>
      </NavActions>
    </NavBar>
  )
}

export default Header
