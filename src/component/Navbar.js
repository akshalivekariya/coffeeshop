import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/"><img src='./images/site-logo.png' className='img-fluid'/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0" >
              <li className="nav-item ">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallary">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
            <div className="nav-button d-flex">
              <NavLink className="btn me-3" type="submit" to="/Contact">Contact</NavLink>
              <NavLink className="btn me-3" type="submit" to="/Login">Login</NavLink>
              <NavLink className="btn me-3" type="submit" to="/Register">Register</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
