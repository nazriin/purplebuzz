import React from 'react'
import '../pages/main.scss'
import { BiBuildings } from 'react-icons/bi'
import { Link } from 'react-router'
import { FaBars, FaRegBell, FaRegUserCircle } from 'react-icons/fa'
import { LuSettings } from 'react-icons/lu'
const Header = () => {
  return (
    <>
    <header>
        <div className="headercontainer">
            <div className="logo">
            <BiBuildings />
            <h2>Purple <span>Buzz</span></h2>
            </div>
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link>About</Link>
                <Link>Work</Link>
                <Link>Pricing</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="navicons">
            <FaRegBell />
            <LuSettings />
            <FaRegUserCircle />
            </div>
            <div className="bars"><FaBars />
            </div>
        </div>
    </header>
    </>
  )
}

export default Header