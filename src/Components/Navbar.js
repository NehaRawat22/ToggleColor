import React from 'react'
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
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
                <a className="nav-link" aria-current="page" href="/TextUtils">
                  Home
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/TextUtils">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/TextUtils">
                  Contact
                </a>
              </li> 
            </ul>
          </div>
        </div>
        <div className="d-flex">
              <div id="btn1" type="button" style={{cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}} className="btn btn-danger mx-1"></div>
              <div id="btn2" type="button" style={{cursor:'pointer'}}  onClick={()=>{props.toggleMode('warning')}} className="btn btn-warning mx-1"></div>
              <div id="btn3" type="button" style={{cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}} className="btn btn-success mx-1"></div>
              <div id="btn4" type="button" style={{cursor:'pointer'}} onClick={()=>{props.toggleMode('info')}} className="btn btn-info mx-1"></div>
              <div id="btn5" type="button" style={{cursor:'pointer'}} onClick={()=>{props.toggleMode('secondary')}} className="btn btn-secondary mx-1"></div>
              <div id="btn6" type="button" style={{cursor:'pointer'}} onClick={()=>{props.toggleMode('light')}} className="btn btn-light btn-outline-dark  mx-1"></div>
            </div>
      </nav>
  )
}

export default Navbar
