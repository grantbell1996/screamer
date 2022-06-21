import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import "./NavBar.css"

export const NavBar = () => {
  const location = useLocation()
  const history = useHistory()
  return (
    // <ul className={`navbar ${location.pathname != "/home" ? "fixed" : "hide"}`}>  
    <nav>

      <div className="navbar__item active">
        <Link to="/home">Home</Link>
      </div>

      <div className="navbar__item active">
        <Link to="/decades">By Decade</Link>
      </div>

      <div className="navbar__item active"> 
        <Link to="/my_lists">My Lists</Link>
      </div>

      <div className="navbar__item active">
        <Link Link to="/new_movie">List a Movie</Link>
      </div>
      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/login" })
          }}>
            Logout
          </button>
          :
          <>
          <div className="navbar__item active">   
            <Link to="/login">Login</Link>
            </div>

            <div className="navbar__item active">
            <Link to="/register">Register</Link>
            </div>
          </>
      }
    </nav>
    // </ul>
  )
}
