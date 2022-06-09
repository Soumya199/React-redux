// import PropTypes from 'prop-types'
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

 function NavBar ()
 {
   const amount = useSelector(state=>state.amount)
  
    return (
      <nav className="navbar navbar-expand-lg bg-dark  navbar-dark" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Bank of Local
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
            </ul>
            <div>
              <button className="btn btn-primary">
                Your balance {amount}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

export default NavBar;
