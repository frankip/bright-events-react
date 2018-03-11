import React, { Component } from "react";
import { connect } from "react-redux";
import Authentication from "./authentication";

class Main extends Component{
    render(){
        return(
            <div>
                <Authentication/>
            </div>
        );
    }
}

export default Main