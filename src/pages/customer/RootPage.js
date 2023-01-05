import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import "../../style/admin.css";
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";
import DashboardPage from "../../pages/customer/Dashboard";
import CustomerShopPage from "../customer/shop/CustomerShopePage";
import ProfileBasePage from "../customer/profile/ProfileBasePage";


class CustomerRootPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "owner";
    }


    render(){
        return (
                <div className="w-100 bg-light">
                    <HeaderNavBar></HeaderNavBar>
                    <div className="root-page   container-fluid ">
                                <div className=" sidenav">
                                    <div className=" side-navigation">
                                        <AnchorTag link={`${this.props.match.path}/dashboard`} liClassName="" className="nav-item" itemValue="Dashboard"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/view`} liClassName="" className="nav-item" itemValue="Shop"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/product-category/list`} liClassName="" className="nav-item" itemValue="Categories"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/product/list`} className="nav-item" itemValue="Products"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/invoice/list`} className="nav-item" itemValue="Invoices"></AnchorTag>
                                        {/* <AnchorTag link={`${this.props.match.path}/profile/password-reset`} className="" itemValue="Password Reset"></AnchorTag> */}
                                    </div>
                                </div>
                                <div className=" main-body">
                                    <Switch>
                                        <Route path={`${this.props.match.path}/dashboard`} component={DashboardPage}/>
                                        <Route path={`${this.props.match.path}/shop`} component={CustomerShopPage}/>
                                        <Route path={`${this.props.match.path}/profile`} component={ProfileBasePage}/>
                                    </Switch>
                                    
                                </div>
                           
                        
                    </div>
                </div>
        ) 
    }
}

export default CustomerRootPage;