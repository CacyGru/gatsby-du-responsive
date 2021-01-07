import React, { useState } from "react"
import { Button } from "./Button"
import { Link } from "gatsby"
import "./Navbar.scss"
import Dropdown from "./Dropdown"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <Link to="'/" className="navbar-logo">
          Start
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu activ" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Start
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About <i className="fas fa-caret-down" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
