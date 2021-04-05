import React, { Component, Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

// responsive
import MediaQuery from 'react-responsive'
import { minDeviceWidth, pageName } from '../utils/Constants'

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// animation
import { Animated } from 'react-animated-css'


class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            currentPage: "Home"
        }
    }

    onClick = () => {
        let { isOpen } = this.state
        let willOpen = false
        if (isOpen) {
            willOpen = false
        } else {
            willOpen = true
        }
        this.setState({
            isOpen: willOpen
        })
    }

    render() {
        let { isOpen } = this.state
        return (
            <Fragment>
                <MediaQuery minDeviceWidth={minDeviceWidth}>
                    <Navbar expand="md lg">
                        <Nav className="ml-auto">
                            {/* <Nav.Item>
                                <NavLink exact to="/" className="nav-link" activeClassName="navActive">{pageName[0]}</NavLink>
                            </Nav.Item> */}
                            <Nav.Item>
                                <NavLink exact to="/" className="nav-link" activeClassName="navActive">{pageName[4]}</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink exact to="/work" className="nav-link" activeClassName="navActive">{pageName[1]}</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink exact to="/education" className="nav-link" activeClassName="navActive">{pageName[2]}</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink exact to="/portfolio" className="nav-link" activeClassName="navActive">{pageName[3]}</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={minDeviceWidth - 1}>
                    {
                        isOpen ? (
                            <Animated className="mobile-nav-container" animationIn="fadeInUp" animationOut="fadeOutLeft" animationInDuration={1000} isVisible={isOpen}>
                                <div>
                                    <div className="dismiss-mobile-menu" onClick={this.onClick}><FontAwesomeIcon icon={faArrowLeft} size="2x" /></div>
                                    <div className="mobile-nav" >
                                        <Nav>
                                            <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={1500}>
                                                {/* <Nav.Item>
                                                    <NavLink exact to="/" className="nav-link" activeClassName="navActive" onClick={this.onClick}>{pageName[0]}</NavLink>
                                                </Nav.Item> */}
                                                <Nav.Item>
                                                    <NavLink exact to="/" className="nav-link" activeClassName="navActive" onClick={this.onClick}>{pageName[4]}</NavLink>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <NavLink exact to="/work" className="nav-link" activeClassName="navActive" onClick={this.onClick}>{pageName[1]}</NavLink>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <NavLink exact to="/education" className="nav-link" activeClassName="navActive" onClick={this.onClick}>{pageName[2]}</NavLink>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <NavLink exact to="/portfolio" className="nav-link" activeClassName="navActive" onClick={this.onClick}>{pageName[3]}</NavLink>
                                                </Nav.Item>
                                            </Animated>
                                        </Nav>
                                    </div>
                                </div>
                            </Animated>
                        ) : (
                                <Navbar>
                                    <Animated animationIn="rotateIn" isVisible={true}>
                                        <div className="open-mobile-menu" onClick={this.onClick}><FontAwesomeIcon icon={faBars} size="2x" /></div>
                                    </Animated>
                                </Navbar>
                            )
                    }
                </MediaQuery>
            </Fragment>
        )
    }
}

export default NavBar