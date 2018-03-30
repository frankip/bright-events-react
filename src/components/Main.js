import React, { Component } from "react";
import { connect } from "react-redux";
import Authentication from "./authentication";
import Registration from "./registration";

class Main extends Component{
    render(){
        return(
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default Main