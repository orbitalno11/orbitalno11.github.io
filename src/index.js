// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/style.css'

import './scripts/control'

// import route tools
import { HashRouter } from 'react-router-dom'

const AppWithRouter = () => (
    <HashRouter basename='/'>
        <App/>
    </HashRouter>
)

ReactDOM.render(<AppWithRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
