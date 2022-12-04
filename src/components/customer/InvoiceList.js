import React,{useState} from "react";
import AnchorTag from "../../components/Anchortag";
import { existingInvoices, removeFromDb } from "../../data/dbFunctions";
import InputFormGroup from "../input/InputFormGroup";
import InvoicesTable from "../table/InvoicesTable";


const InvoiceList=()=>{
  const columnList = ["ID", "Customer", "Invoice ID", "Total", "Paid", "Date", "Action"];
  
  const [totalInvoices,setTotalInvoices]=useState([]);
       
  const setInvoices=(invoices)=>{
    setTotalInvoices(invoices)
   
    }
   const exinvoices =existingInvoices()
   
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
                <InvoicesTable className="table table-striped" columnList={columnList}  setInvoices={setInvoices}></InvoicesTable>
            </div>
        ) 
    }


export default InvoiceList;