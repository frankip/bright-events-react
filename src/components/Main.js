import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Authentication from "./authentication";
import Registration from "./registration";
import Login from "./login";

class Main extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Registration} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main