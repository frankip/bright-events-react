import React, { Component } from "react";

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
                        <li className="tab"><a href="signup">Sign Up</a></li>
                        <li className="tab active"><a href="login">Log In</a></li>
                    </ul>
                    <div className="tab-content">>
                <div id="signup">
                            <h3>Sign Up for Free</h3>
                            <form onSubmit={this.handleOnSubmit.bind(this)}>
                                <div className="top-row">
                                    <div className="field-wrap">
                                        <label> First Name<span className="req">*</span></label>
                                        <input type="text" name="first_name" required ref="first_name" onChange={this.handleChange} />
                                    </div>
                                    <div className="field-wrap">
                                        <label> Last Name<span className="req">*</span></label>
                                        <input type="text" name="last_name" required ref="last_name" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="field-wrap">
                                    <label> Email Address<span className="req">*</span> </label>
                                    <input type="email" name="email" required ref="email" onChange={this.handleChange} />
                                </div>
                                <div className="field-wrap">
                                    <label> Set A Password<span className="req">*</span> </label>
                                    <input type="password" name="password" required ref="password" onChange={this.handleChange} />
                                </div>
                                {/* <a type="submit" value="submit" className="button button-block">Get Started</a>  */}
                                <button type="submit" value="submit" className="button button-block">Get Started</button>
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
                                <p className="forgot"><a href="#">Forgot Password?</a></p> <a className="button button-block" href="index.html">Log In</a> </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}

export default Login