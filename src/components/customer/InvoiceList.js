import React,{useState,useRef} from "react";
import AnchorTag from "../../components/Anchortag";
import { existingInvoices, removeInvoice } from "../../data/dbFunctions";
import InputFormGroup from "../input/InputFormGroup";
import InvoicesTable from "../table/InvoicesTable";


const InvoiceList=()=>{


  const columnList = ["ID", "Customer", "Invoice ID", "Total", "Paid", "Date", "Action"];
  const productsListDiv=useRef() 
  const nameField=useRef(); 
       

   const remove=removeInvoice

   const exinvoices =existingInvoices()
   
   
   if (!exinvoices) return null;
        return (
            <div className="invoices-page page">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/invoice/create" className="btn btn-sm btn-info float-right" itemValue="Create Invoice"></AnchorTag>
                    <h4>Invoices</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p className="bold">Filter</p>
                    </div>
                    <div className="col-3">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control nice-border" placeholder="Customer Name"/>
                    </div>
                    <div className="col-3">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control nice-border" placeholder="Invoice ID"/>
                    </div>
                    
                </div>
                
                <div className="productList" ref={productsListDiv}>
                    <h5 className="">{exinvoices.length} total invoices</h5>
                    <InvoicesTable className="table table-striped" columnList={columnList}  invoices={exinvoices}></InvoicesTable>
                </div>    
            </div>
        ) 
    }


export default InvoiceList;