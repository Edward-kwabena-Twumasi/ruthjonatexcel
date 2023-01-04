import React, {Component} from "react";
import { Link, NavLink } from "react-router-dom";


class AnchorTag extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <NavLink activeClassName="active-link" className={this.props.className} to={this.props.link}>{this.props.itemValue}</NavLink>
        )
        
    }
}

export default AnchorTag;