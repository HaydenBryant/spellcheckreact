import React from "react"
import {Link, withRouter} from "react-router-dom"

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a href="" className="brand-logo left">Hayden's Spell Checker</a>
                <ul className="right">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/spellcheck">Spell Check</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)