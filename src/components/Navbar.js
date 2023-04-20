import React from 'react'
import { NavLink } from "react-router-dom";   // <== IMPORT

function Navbar() {
  return (
    <nav className="Navbar">
    <ul>
        <NavLink to="/">LAB - WikiCountries</NavLink>      
    </ul>
    
  </nav>
  )
}

export default Navbar