import React, { Component } from "react";
import { connect } from "react-redux";

// local imports
import {UserReg} from "../action/registrationAction";

class Registration extends Component {
    constructor(){
        super();
        this.state= {
            first_name:'',
            last_name:'',
            email:'',
            password:'',
        }
    }
    handleOnSubmit(e){
        console.log(
            this.refs.first_name.value, 
            this.refs.last_name.value, 
            this.refs.email.value, 
            this.refs.password.value);
        console.log(e);
        let values = new FormData();
        values.set("first_name", this.refs.first_name.value);
        values.set("last_name", this.refs.last_name.value);
        values.set("email", this.refs.email.value);
        values.set("password", this.refs.password.value);

        this.props.UserReg(values);      
        e.preventDefault();
        this.state= {
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
  render() {
    return (
        <div className="form">
        <ul className="tab-group">
            <li className="tab active"><a href="signup">Sign Up</a></li>
            <li className="tab"><a href="login">Log In</a></li>
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


export default connect(null, {UserReg})(Registration);
// export default connect(mapStateToProps, mapDispatchToProps)(Registration);
