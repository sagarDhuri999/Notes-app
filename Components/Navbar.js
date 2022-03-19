import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <p>UNIVERSAL</p> */}
                <p className={`text-${props.mode === "light" ? "dark" : "light"}`}> {props.title}</p>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <input className="form-check-input text" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> DarkMode</label>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = { title: PropTypes.string }