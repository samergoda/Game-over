import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../img/logo.png"
import './Nav.css'

export default function NavBar({ userData ,logOut }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  ">
        <div className="container ">

          <Link className='cap  mt-2 navbar-brand' to=''>
            <img src={logo} alt="" className='logo' />GAME OVER</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* {userData ?  */}
            <ul className="navbar-nav me-auto m-2  mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="All">All</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="">Platform</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                  <li><Link className="dropdown-item" value='pc' to='Platform/pc'>PC</Link></li>
                  <li><Link className="dropdown-item" value='Browser' to="Platform/browser">Browser</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Sortby</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="Sortby/release-date">release-date</Link></li>
                  <li><Link className="dropdown-item" to="Sortby/popularity">popularity</Link></li>
                  <li><Link className="dropdown-item" to="Sortby/alphabetical">Alphabetical</Link></li>
                  <li><Link className="dropdown-item" to="Sortby/relevance">relevance</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Categories</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="Category/racing">Racing</Link></li>
                  <li><Link className="dropdown-item" to="Category/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="Category/social">Social</Link></li>
                  <li><Link className="dropdown-item" to="Category/shooter">Shooter</Link></li>
                  <li><Link className="dropdown-item" to="Category/open-world">Open-world</Link></li>
                  <li><Link className="dropdown-item" to="Category/zombie">Zombie</Link></li>
                  <li><Link className="dropdown-item" to="Category/fantasy">Fantasy</Link></li>
                  <li><Link className="dropdown-item" to="Category/action-rpg">Action-rpg</Link></li>
                  <li><Link className="dropdown-item" to="Category/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="Category/flight">Flight</Link></li>
                  <li><Link className="dropdown-item" to="Category/battle-royale">Battle-royale</Link></li>
                </ul>
              </li>
            </ul>
             {/* : ''} */}
          </div>


          <form className="d-flex align-items-center">
            <ul className='navbar-nav'>
              {userData ? <li className="nav-item">
                <span className="nav-link cursor-pointer" onClick={logOut} >Logout</span>
              </li> : <>
                <li className="nav-item">
                  <Link className="nav-link" to="Login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="">Register</Link>
                </li>
              </>
              }

            </ul>
          </form>
        </div>
      </nav>
    </>
  )
}
