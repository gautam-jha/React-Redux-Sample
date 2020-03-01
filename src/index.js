import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { Provider } from "react-redux";
import configureStore from "./js/store/index";


import Login from './Screens/Login';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={App} />
        
      </Switch>
        
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
