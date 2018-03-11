import React, { Component } from "react";
import { connect } from "react-redux";

class Registration extends Component {
    constructor(){
        super();
        this.state= {
            getData:{}
        }
    }
    handleOnSubmit(e){
        console.log(
            this.refs.first_name.value, 
            this.refs.last_name.value, 
            this.refs.email.value, 
            this.refs.password.value);
        this.setState({
          getData: {
            first_name: this.refs.first_name.value,
            last_name: this.refs.last_name.value,
            email: this.refs.email.value,
            password: this.refs.password.value
          }
        });        e.preventDefault();
    }
  render() {
    return (
        <div className="form">
        <ul className="tab-group">
            <li className="tab active"><a href="#signup">Sign Up</a></li>
            <li className="tab"><a href="#login">Log In</a></li>
        </ul>
        <div className="tab-content">>
            <div id="signup">
                <h3>Sign Up for Free</h3>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <div className="top-row">
                        <div className="field-wrap">
                            <label> First Name<span className="req">*</span></label>
                            <input type="text" required ref="first_name" /> 
                        </div>
                        <div className="field-wrap">
                            <label> Last Name<span className="req">*</span></label>
                            <input type="text" required ref="last_name" /> 
                        </div>
                    </div>
                    <div className="field-wrap">
                        <label> Email Address<span className="req">*</span> </label>
                        <input type="email" required ref="email" /> 
                    </div>
                    <div className="field-wrap">
                        <label> Set A Password<span className="req">*</span> </label>
                        <input type="password" required ref="password"/> 
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
                        <input type="email" required  /> </div>
                    <div className="field-wrap">
                        <label> Password<span className="req">*</span> </label>
                        <input type="password" required /> </div>
                    <p className="forgot"><a href="#">Forgot Password?</a></p> <a className="button button-block" href="index.html">Log In</a> </form>
            </div>
        </div>
    </div>

    );
  }
}

export default Registration;
