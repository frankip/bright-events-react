import React, { Component } from "react";
import { connect } from "react-redux";

class Registration extends Component {
  render() {
    return (
        <div class="form">
        <ul class="tab-group">
            <li class="tab active"><a href="#signup">Sign Up</a></li>
            <li class="tab"><a href="#login">Log In</a></li>
        </ul>
        <div class="tab-content">
            <div id="signup">
                <h3>Sign Up for Free</h3>
                <form>
                    <div class="top-row">
                        <div class="field-wrap">
                            <label> First Name<span class="req">*</span></label>
                            <input type="text" required autocomplete="off" /> </div>
                        <div class="field-wrap">
                            <label> Last Name<span class="req">*</span></label>
                            <input type="text" required autocomplete="off" /> </div>
                    </div>
                    <div class="field-wrap">
                        <label> Email Address<span class="req">*</span> </label>
                        <input type="email" required autocomplete="off" /> </div>
                    <div class="field-wrap">
                        <label> Set A Password<span class="req">*</span> </label>
                        <input type="password" required autocomplete="off" /> </div> <a type="submit" class="button button-block" href="index.html">Get Started</a> </form>
            </div>
            <div id="login">
                <h3>Welcome Back!</h3>
                <form action="index.html" method="post">
                    <div class="field-wrap">
                        <label> Email Address<span class="req">*</span> </label>
                        <input type="email" required autocomplete="off" /> </div>
                    <div class="field-wrap">
                        <label> Password<span class="req">*</span> </label>
                        <input type="password" required autocomplete="off" /> </div>
                    <p class="forgot"><a href="#">Forgot Password?</a></p> <a class="button button-block" href="index.html">Log In</a> </form>
            </div>
        </div>
    </div>

    );
  }
}

export default Registration;
