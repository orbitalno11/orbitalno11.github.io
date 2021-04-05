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
import AboutMe from './layout/aboutme'


function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/" component={AboutMe} />
                <Route exact path="/work" component={Work}/>
                <Route exact path="/education" component={Education}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/whoami" component={AboutMe}/>
            </Switch>
            {/*<div className="footer">*/}
            {/*    footer*/}
            {/*</div>*/}
        </React.Fragment>

    );
}

export default App;
