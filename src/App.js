import React from 'react';
import './App.css';

// import Route Tool
import { Route, Switch } from 'react-router-dom'

// import Component
import NavBar from './Components/navbar.js'

// edition
import Home from './layout/home'
import Work from './layout/work'
import Education from './layout/education'
import Portfolio from "./layout/portfolio";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far)


function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work}/>
                <Route exact path="/education" component={Education}/>
                <Route exact path="/portfolio" component={Portfolio}/>
            </Switch>
            {/* <div id="myContainer" className="wrapper">
                <div id="mynav">
                    <NavBar />
                </div>
                <div id="myContent">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div id="sidebarCollapse"><FontAwesomeIcon icon="bars" size="2x"/></div>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/work" component={Work}/>
                    <Route exact path="/education" component={Education}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/testupload" component={Form} />
                </div>
            </div> */}
            {/*<div className="footer">*/}
            {/*    footer*/}
            {/*</div>*/}
        </React.Fragment>

    );
}

export default App;
