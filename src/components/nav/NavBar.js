import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./NavBar.css";
import navbarHomeLogo from "../../images/screamer_navbar_logo.png";
import OurPicksLogo from "../../images/our_picks_logo.png";
import uploadLogo from "../../images/upload_logo.png"
import logoutLogo from "../../images/logout_logo.png";
import myListsLogo from "../../images/my_lists_header.png";

export const NavBar = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    // <ul className={`navbar ${location.pathname != "/home" ? "fixed" : "hide"}`}>
    <ul className="navbar">
      <div className="navbar__item active">
        <Link to="/home">
          <img className="navbarLogo" src={navbarHomeLogo} />
        </Link>
      </div>

      <div className="navbar__item_side active">
        <Link to="/ourpicks">
          <img className="picksNavbarLogo" src={OurPicksLogo} />
        </Link>
      </div>

      <div className="navbar__item active"> 
        <Link to="/my_lists">
          <img className="navbarLogo" src={myListsLogo} />
        </Link>
      </div>

      <div className="navbar__item_side active">
        <Link className="listMovie" to="/new_movie">
          <img className="navbarLogo" src={uploadLogo} />
        </Link>
      </div>
      {localStorage.getItem("auth_token") !== null ? (
        <div className="navbar__item_side active">
          <Link
            onClick={() => {
              localStorage.removeItem("auth_token");
            }}
            to="/login"
          >
            <img className="logoutLogo" src={logoutLogo} />
          </Link>
        </div>
      ) : (
        <>
          <div className="navbar__item_side active">
            <Link to="/login">Login</Link>
          </div>

          <div className="navbar__item active">
            <Link to="/register">Register</Link>
          </div>
        </>
      )}
    </ul>
    // </ul>
  );
};
