import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Login extends Component{
    render(){
        return(
            <div className="body">
                <div className="intro">
                    <div>
                        <h1>
                            Welcome to<br />
                            <span>Bright Events</span>
                        </h1>
                        <p>
                            create and manage different types of events while making them
                            easily accessible to target markets
                        </p>
                    </div>
                </div>
                <div className="form">
                    <ul className="tab-group">
                        <li className="tab">
                            <Link to={'/'}>Signup</Link>
                        </li>
                        <li className="tab active">
                            <li><Link to={'/login'}>login</Link></li>
                        </li>
                    </ul>
                    <div className="tab-content">
                    <div id="signup">
                            <h3>Welcome Back!</h3>
                            <form action="index.html" method="post">
                                <div className="field-wrap">
                                    <label> Email Address<span className="req">*</span> </label>
                                    <input type="email" required /> </div>
                                <div className="field-wrap">
                                    <label> Password<span className="req">*</span> </label>
                                    <input type="password" required /> </div>
                                <p className="forgot"><a href="#">Forgot Password?</a></p>
                                <a className="button button-block" href="#">Log In</a>
                            </form>
                           
                        </div>
                        <div id="login">
                            <h3>Welcome Back!</h3>
                            <form action="index.html" method="post">
                                <div className="field-wrap">
                                    <label> Email Address<span className="req">*</span> </label>
                                    <input type="email" required /> </div>
                                <div className="field-wrap">
                                    <label> Password<span className="req">*</span> </label>
                                    <input type="password" required /> </div>
                                <p className="forgot"><a href="#">Forgot Password?</a></p> 
                                <a className="button button-block" href="index.html">Log In</a> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}

export default Login