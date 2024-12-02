import './App.css'
import { useState } from 'react'

import githubWhite from './assets/github-white.svg'
import linkedinWhite from './assets/linkedin-white.svg'
import menuWhite from './assets/menu-white.svg'

const NavBar = () => {
  const [sidebarHidden, setSidebarHidden] = useState(true)
  return (
    <div className='nav-wrapper'>
      <img className={`menu-button ${sidebarHidden ? '' : 'rotate90'}`}
        src={menuWhite}
        onClick={() => { setSidebarHidden(!sidebarHidden) }}
        alt='menu'>
      </img>

      <div className={`sidebar ${sidebarHidden ? 'hidden' : ''}`} >
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>

      <div className='topbar'>
        <h1>yea</h1>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <div className="links">
        <a href='https://github.com/matiaspaavilainen' target='_blank' className='icon'>
          <img src={githubWhite}
            alt='GitHub'></img>
        </a>
        <a href='https://www.linkedin.com/in/matiaspaavilainen/' target='_blank' className='icon'>
          <img src={linkedinWhite}
            alt='linkedin'>
          </img>
        </a>
      </div>
    </>
  )
}

export default App
