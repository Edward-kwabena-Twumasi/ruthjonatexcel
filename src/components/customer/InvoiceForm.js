import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Button from "../Button";
import InputFormGroup from "../input/InputFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";
import SearchDataTable from "../table/SearchDataTable";
import { existingProducts, existingCategories } from "../../data/dbFunctions";
import TableHead from "../table/TableHead";
import TdTag from "../table/TdTag";



const InvoiceForm =()=>{
    
       const columnList = ["ID", "Name","Price" ,"Stock" ,"Quantiy", "Action"];
       const exproducts = existingProducts()
       const excategories=existingCategories()
       const tableData = [
            {"id": 1, "name": "USB 2.0 to Sata 7+15 Pin 2.5 Converter ..", "stock": 5, "price": "238.00"},
            {"id": 2, "name": "FANTECH VX7 CRYPTO GAMING MOUSE ..", "stock": 20, "price": "980.00"},
            {"id": 3, "name": "Cake decoration turntable - 28cm and 3 pieces set ..", "stock": 20, "price": "305.00"},
            {"id": 4, "name": "Stylish White Sunglasses ..", "stock": 10, "price": "139.00"},
        ]
        const invoiceColumnList = ["ID", "Name", "Quantity", "Price", "Sub total"];
        
   


        if (exproducts==null) {
          return null  
        }
        return (
            <div className="invoice-form page">
               <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/invoice/list" className="btn btn-sm btn-primary float-right" itemValue="Back to Invoice List"></AnchorTag>
                    <h4>Create Invoice</h4>
                </div>
                <div className="w-75">
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col-3">
                                <div className="form-group">
                                    <Button className="btn btn-sm btn-success w-100" text="Add Item" dataToggle="modal" dataTarget="#exampleModalCenter"/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <Button className="btn btn-sm btn-warning w-100" text="Save Invoice"/>
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <h5 className="p-3">Selected Products</h5>
                                {
                                     <table className={"table table-striped"} >
                                     <TableHead columnList={invoiceColumnList}></TableHead>
                                     <tbody>
                                         {
                                             
                                            exproducts.map((data, index) => {
                                                 return (
                                                 <tr key={index} className="table-row" >
                                                     {
                                                         [Object.keys(data).pop()].concat(Object.keys(data).slice(0,3)).map((key, index) => {
                     
                                                             return <TdTag key={index} value={data[key]} isAction="false"></TdTag>
                                                         })
                                                     }
                                                     {/* <td scope="col" className="row">
                                                         <h5>Edit</h5>
                                                         <h5>view</h5>
                                                         <h5 onClick={()=>{}}>Remove</h5>
                                                         </td> */}
                                                     
                     
                                                     {/* {renderAction(data)} */}
                                                     
                                                     
                                                 </tr>
                                                 )
                                             })
                                         }
                                     </tbody>
                                 </table>
                                }
                                <table className="table table-striped w-25 float-right mt-4">
                                    <tbody>
                                        <tr>
                                            <td>Total</td>
                                            <td>25785.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-xl " role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">Search & Add Product</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-row mb-5 modal-search-box">
                                            <div className="col-12">
                                                <p><b>Search Box</b></p>
                                            </div>
                                            <div className="col-3">
                                                <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Product Name"/>
                                            </div>
                                            <div className="col-3">
                                                <InputFormGroup labelClassName="sr-only" inputClassName="form-control  form-control-sm" placeholder="Product Code"/>
                                            </div>
                                            <div className="col-3">
                                                <SelectFormGroup labelClassName="sr-only" placeholder="Category" selectClassName="custom-select custom-select-sm mr-sm-2" selectData={excategories==null?[]:excategories}/>
                                            </div>
                                            <div className="col-3">
                                                <Button className="btn btn-sm btn-warning w-75" text="Search"/>
                                            </div>
                                            
                                        </div>
                                        <div className="w-100">
                                            <SearchDataTable className="table table-sm search-tb-font table-striped" columnList={columnList} tableData={exproducts} actionLinkPrefix=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ) 
    }


export default InvoiceForm;