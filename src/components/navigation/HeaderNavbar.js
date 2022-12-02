import React, {Component} from "react";
import { Link } from "react-router-dom";
import NavLiTag from "../navigation/NavListTag";


class HeaderNavBar extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
        var navbarText = "";
        if(this.userRole == "admin"){
            this.navbarText = "Ruthjo Stock Manager"
        }
        else{
            this.navbarText = "Inventory Management"
        }
    }


    render(){
            return (
                <nav className="navbar navbar-expand-lg top-nav">
                    <Link className="navbar-brand px-3 text-light" to="/">{this.navbarText}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <NavLiTag link="/login" className="nav-link text-light" itemValue="Logout"></NavLiTag>
                        </ul>
                    </div>
                </nav>
            )
        
    }
}

export default HeaderNavBar;