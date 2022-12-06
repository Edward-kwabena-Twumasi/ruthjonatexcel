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
                    <h3 className="ml-3 page-title">Dashboard</h3>

                    <div className="container-fluid dash-body">
                        <h4>summary</h4>
                        <div className="row summary">
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p><b>All Products</b></p>
                                    <p>{allProducts}</p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p><b>All Categories</b></p>
                                    <p>{allCategories}</p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="dash-summary-cell card">
                                    <p><b>All invcoices</b></p>
                                    <p>{allInvoices}</p>
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


export default DashboardPage;