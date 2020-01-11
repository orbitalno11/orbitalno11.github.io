import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="container p-4">
                    <a id="dismiss" href="#"><FontAwesomeIcon icon={"arrow-left"} size="2x"/></a>
                </div>
                <nav className="navbar navbar-dark">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/work" activeClassName="active" className="nav-link">Work
                                    Expereinces</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/education" activeClassName="active"
                                         className="nav-link">Education</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/portfolio" activeClassName="active"
                                         className="nav-link">Portfolio</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar