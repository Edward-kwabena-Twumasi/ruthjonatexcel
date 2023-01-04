import React, {Component} from "react";
import { Link, NavLink } from "react-router-dom";


class NavLiTag extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li className="nav-item active">
                <NavLink activeClassName="active-link" className={this.props.className} to={this.props.link}>{this.props.itemValue}</NavLink >
            </li>
        )
        
    }
}

export default NavLiTag;