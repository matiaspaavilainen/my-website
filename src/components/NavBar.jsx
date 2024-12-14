import { useState } from 'react'
import menuWhite from '../assets/menu-white.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [sidebarHidden, setSidebarHidden] = useState(true)
  const [titleText, setTitleText] = useState('Matias Paavilainen')
  console.log(document.URL)
  return (
    <div className='fixed'>
      <div className='nav-wrapper'>

        <img className={`menu-button ${sidebarHidden ? '' : 'rotate90'}`}
          src={menuWhite}
          onClick={() => { setSidebarHidden(!sidebarHidden) }}
          alt='menu'>
        </img>

        <div className={`sidebar ${sidebarHidden ? 'hidden' : ''}`} >
          <Link to="/" onClick={() => {
            setSidebarHidden(true)
            setTitleText('Matias Paavilainen')
          }}>Home</Link>
          <Link to="/Photos" onClick={() => {
            setSidebarHidden(true)
            setTitleText('Photos')
          }}>Photos</Link>
          {/* <Link to="/About" onClick={() => {
            setSidebarHidden(true)
            setTitleText('About')
          }}>About</Link> */}
        </div>

        <div className='topbar'>
          <h1>{titleText}</h1>
        </div>
      </div>
    </div>
  )
}

export default NavBar