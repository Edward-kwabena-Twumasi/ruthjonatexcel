import React, {useEffect,useState} from "react";
import { totalCategories, totalProducts,totalInvoices } from "../../data/dbFunctions";

const DashboardPage =()=>{
    let categoriesCount,productsCount,invoicesCount=0;
    const [[allCategories,allProducts,allInvoices],setCounts]=useState([0,0,0])

    useEffect(()=>{
        let catsresult,prosresult=0;
        categoriesCount= totalCategories()
        categoriesCount.then((count) => {
         catsresult=count;
        setCounts([count,0,0])
        }).catch((err) => {
            
        });  

        productsCount= totalProducts()
        productsCount.then((count) => {
         prosresult=count  
        setCounts([catsresult,count,0])
        }).catch((err) => {
            
        });
        
        invoicesCount= totalInvoices()
        invoicesCount.then((count) => {
           
        setCounts([catsresult,prosresult,count])
        }).catch((err) => {
            
        }); 
    },[])
   
        return (
            <div className="dash-page page">
                <div className="">
                    <h3 className="ml-3 mb-3 page-title">Dashboard</h3>

                    <div className="container-fluid dash-body">
                        <h5 className="mb-3 light">Summary</h5>
                        <div className="row summary">
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p className="card-title">All Products</p>
                                    <p className="display-count">{allProducts}</p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p className="card-title">All Categories</p>
                                    <p className="display-count">{allCategories}</p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p className="card-title">All invcoices</p>
                                    <p className="display-count">{allInvoices}</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="mt-3 light">Statistics</h5>
                        <div className="statistics">
                        <div>Comprehensive statistics for shop...</div>
                        </div>
                    </div>
                </div>
            
            </div>
        ) 
    }


export default DashboardPage;