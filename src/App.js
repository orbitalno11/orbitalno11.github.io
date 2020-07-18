import React from 'react';
import './App.css';

// import Route Tool
import { Route, Switch } from 'react-router-dom'

// import Component
import NavBar from './Components/navbar.js'
// import Home from './Components/home.js'
import Work from './Components/work'
import Education from "./Components/education";
import Portfolio from "./Components/portfolio";

// edition
import Home from './layout/home'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Form from "./Components/Form";
library.add(fas, fab, far)


function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
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
