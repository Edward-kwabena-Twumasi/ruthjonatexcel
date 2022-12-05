import React,{useState,useRef} from "react";
import AnchorTag from "../../components/Anchortag";
import { existingInvoices, removeFromDb } from "../../data/dbFunctions";
import InputFormGroup from "../input/InputFormGroup";
import InvoicesTable from "../table/InvoicesTable";


const InvoiceList=()=>{
  const [totalInvoices,setTotalInvoices]=useState([]);
  const [searchSuggestions,setSearchSuggestions]=useState([]);
  const [searchkey,setSearchkey]=useState("");

  const columnList = ["ID", "Customer", "Invoice ID", "Total", "Paid", "Date", "Action"];
  const productsListDiv=useRef() 
  const searchResultsDiv=useRef() 
  const nameField=useRef(); 
       
  const setInvoices=(invoices)=>{
    setTotalInvoices(invoices)
   
    }
   const remove=removeFromDb

   const exinvoices =existingInvoices()
   const filterProducts=(products)=>{

    if (nameField.current.value.toString().length>0) {
        setSearchkey(nameField.current.value.toString())
        setSearchSuggestions(products.filter((product)=>product["name"].toLowerCase().includes(nameField.current.value.toLowerCase())))
        console.log(searchSuggestions)
    
    } else {
        setSearchSuggestions([])
        setSearchkey("")
    }
}
   
   if (!exinvoices) return null;
        return (
            <div className="invoices-page page">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/invoice/create" className="btn btn-sm btn-warning float-right" itemValue="Create Invocie"></AnchorTag>
                    <h4>Invoices</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Invoice</b></p>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Customer Name"/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Invoice ID"/>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <input type="submit" className="btn btn-sm btn-success" value="Search"/>
                        </div>
                    </div>
                </div>
                <div className="searchResults container-fluid" ref={searchResultsDiv}>
                    <h5 className=""> {searchkey.length>0 ?"search results for "+searchkey:""}</h5>   
                    { 
                    searchSuggestions.map((data,index)=>{
                    return <div key={index} className="row container-fluid p-3">
                        {
                    
                
                        [Object.keys(data).pop()].concat(Object.keys(data).slice(0,4)).map((key, index) => {

                            return <h5 key={index} className="col-2"> {data[key]}</h5>
                        })
                    
                        }
                        <div className="col-2 row">
                                        <h5>Edit</h5>
                                        <h5>view</h5>
                                        <h5 onClick={()=>remove(data["id"])}>Remove</h5>
                                        </div>
                        </div>
                    })
                    }
                </div>
                <div className="productList" ref={productsListDiv}>
                    <h5 className="">{totalInvoices.length} total invoices</h5>
                    <InvoicesTable className="table table-striped" columnList={columnList}  invoices={exinvoices}></InvoicesTable>
                </div>    
            </div>
        ) 
    }


export default InvoiceList;