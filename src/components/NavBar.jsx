import { useState } from 'react'
import menuWhite from '../assets/menu-white.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [sidebarHidden, setSidebarHidden] = useState(true)

  return (
    <div className='fixed'>
      <div className='nav-wrapper'>

        <img className={`menu-button ${sidebarHidden ? '' : 'rotate90'}`}
          src={menuWhite}
          onClick={() => { setSidebarHidden(!sidebarHidden) }}
          alt='Menu'>
        </img>

        <div className={`sidebar ${sidebarHidden ? 'hidden' : ''}`} >
          <Link to="/Home" onClick={() => {
            setSidebarHidden(true)
          }}>Home</Link>

          <Link to="/Photos" onClick={() => {
            setSidebarHidden(true)
          }}>Photos</Link>

          <Link to="/About" onClick={() => {
            setSidebarHidden(true)
          }}>About</Link>

        </div>

        <div className='topbar'>
          <h1>{window.location.pathname.split("/")[1]}</h1>
        </div>
      </div>
    </div>
  )
}

export default NavBar