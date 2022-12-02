import React, {Component} from "react";
import PageHeader from "../../components/PageHeader";

class DashboardPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "owner";
    }


    render(){
        return (
            <div className="dash-page page">
                <div className="">
                    <h3 className="ml-3 page-title">Dashboard</h3>

                    <div className="container-fluid dash-body">
                        <h4>summary</h4>
                        <div className="row summary">
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p><b>All Products</b></p>
                                    <p>500</p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p><b>All Categories</b></p>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p><b>Sold today</b></p>
                                    <p>50</p>
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-3">statistics</h4>
                        <div className="statistics">

                        </div>
                    </div>
                </div>
            
            </div>
        ) 
    }
}

export default DashboardPage;