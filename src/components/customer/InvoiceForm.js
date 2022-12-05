import React, {useEffect, useRef, useState} from "react";
import AnchorTag from "../../components/Anchortag";
import Button from "../Button";
import InputFormGroup from "../input/InputFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";
import SearchDataTable from "../table/SearchDataTable";
import { existingProducts, existingCategories, addToInvoices } from "../../data/dbFunctions";
import TableHead from "../table/TableHead";
import TdTag from "../table/TdTag";
import useInvoiceItemsStore from "../../data/temporaryStore";




const InvoiceForm = ()=>{
    
       const columnList = ["ID", "Name","Price" ,"Stock" ,"Quantiy", "Action"];
       const invoiceItemsList = ["ID", "Name", "Quantity", "Price", "Sub total"];
       let total=0;

       let exproducts = existingProducts()
       const excategories=existingCategories()
      
       const invoiceItems=useInvoiceItemsStore((state) => state.items)
       
       const nameField=useRef();
       let [products,setProducts]=useState([]);
       const [status, setStatus] = useState("");
       
       const addInvoice=addToInvoices(setStatus);

       
       const getTotal=(items)=>{
        let total=0;
        items.forEach(item=>total+=total+item.sub_total)
        return total;
       }

       useEffect(()=>{
        products=exproducts
        setProducts(products)
        
       },[exproducts])

       const filterProducts=(query)=>{
        if (query.toString().length>0) {
            setProducts(products.filter(product=>product.name.toLowerCase().includes(query.toLowerCase())))
        } else {
            products=exproducts
            setProducts(products)
        }
       }
       

        if (exproducts==null) return null  
        
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
                                    <button className="btn btn-sm btn-warning w-100" text="Save Invoice" onClick={()=>addInvoice(["customer",total,"paid"])} />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <h5 className="p-3">Selected Products</h5>
                                {
                                   
                                     <table className={"table table-striped"} >
                                     <TableHead columnList={invoiceItemsList}></TableHead>
                                     <tbody>
                                         {
                                           
                                            invoiceItems.map((data, index) => {
                                                total+=data.sub_total
                                                const reorderdKeys= Object.keys(data);
                                                 return (
                                                 <tr key={index} className="table-row" >
                                                     {
                                                        reorderdKeys.map((key, index) => {
                     
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
                                         <tr>{getTotal(invoiceItems)}</tr>

                                     </tbody>
                                 </table>
                                }
                                
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
                                                <div className="form-group">
                                                    <label className="sr-only">Product name</label>
                                                    <input className="form-control  form-control-sm" placeholder="product name" ref={nameField} onChange={()=>filterProducts(nameField.current.value)}></input>
                                                </div>
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
                                            <SearchDataTable className="table table-sm search-tb-font table-striped" columnList={columnList} tableData={products==null?exproducts:products} actionLinkPrefix=""/>
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