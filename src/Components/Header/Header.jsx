import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


  // isActive
  let [home, setHome] = useState('')
  let [about, setAbout] = useState('')
  let [reg, setReg] = useState('')
  let [login, setLogin] = useState('')

  // isActive
  const homeFunc = () => {
    setHome("rgb(0, 0, 255)")
    setAbout('')
    setReg('')
    setLogin("")
  }

  const aboutFunc = () => {
    setHome("")
    setAbout('rgb(0, 0, 255)')
    setReg('')
    setLogin("")
  }


  const regFunc = () => {
    setHome("")
    setAbout('')
    setReg('rgb(0, 0, 255)')
    setLogin("")
  }


  const loginFunc = () => {
    setHome("")
    setAbout('')
    setReg('')
    setLogin("rgb(0, 0, 255)")
  }

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h2>
            Ricky and <span>Morty</span>
          </h2>
        </div>
        <nav>
          <ul>
            <li onClick={homeFunc}>
              <Link to={'/'} className={home}  style={{color:home}}>
                Bosh sahifa
              </Link>
            </li>
            <li onClick={aboutFunc}>
              <Link to={'/about'} className={about}  style={{color:about}}>
                About
              </Link>
            </li>
            <li onClick={regFunc}>
              <Link to={'/registration'} className={reg} style={{color:reg}}>
                Register
              </Link>
            </li>
            <li onClick={loginFunc}>
              <Link to={'/login'} className={login} style={{color:login}}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
