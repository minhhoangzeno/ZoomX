import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './page/HomePage';
export default function Navigation(){
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}