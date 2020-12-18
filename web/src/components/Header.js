import React, { useState } from "react"
import { Link } from "gatsby"
import { Instagram } from "react-feather"
import { Menu, X } from "react-feather"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setShowMenu(!showMenu)
  }

  const handleIconChange = () => {
    if (showMenu) {
      return <X className="x"/>
    } else {
      return <Menu />
    }
  }

  const handleNavClick = e => {
    if (e.target.className === 'navbarActive') {
      e.stopPropagation();
      setShowMenu(!showMenu)
    }
  }


    return (
        <div className="header">
          <div className="logo">
            <Link to="/">Tattooing by William Brown</Link>
          </div>
          <nav
            className={
              showMenu
                ? "navbarActive"
                : "navbar"
            }
            onClick={handleNavClick}
            onKeyDown={handleNavClick}
          >
            <Link to="/tattoos">Tattoos</Link>
            <Link to="/paintings">Paintings</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://www.instagram.com/williampbrown/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={15} className="instagram" />
            </a>
          </nav>
          <Link to="#" className="menu" onClick={handleClick}>
            {handleIconChange()}
          </Link>
        </div>
    )
}

export default Header
