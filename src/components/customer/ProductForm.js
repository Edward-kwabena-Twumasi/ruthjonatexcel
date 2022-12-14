import React, {useRef,useState} from "react";
import AnchorTag from "../../components/Anchortag";
// import {useNavigate} from "react-router-dom"

import {  addToProducts, existingCategories } from "../../data/dbFunctions";


const ProductForm =()=>{
    
    const [status, setStatus] = useState("");
    // const navigate = useNavigate();

    const nameRef=useRef();
    const categoryRef=useRef();
    const priceRef=useRef();
    const stockRef=useRef();

  
    const excategories = existingCategories();

    const addProduct= addToProducts(setStatus)
    console.log(addProduct)

     if (!excategories) return null;
        return (
            <div className="create-product-page page">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/product/list" className="btn btn-primary float-right" itemValue="Back to Product List"></AnchorTag>
                    <h2 className="bold ml-3">Create Product</h2>
                </div>
                <div className="w-80">
                    <form>
                        <div className="container-fluid">
                           <div className="form-group col-6">
                                    <label  className="col-form-label">Name</label>
                                    <div className="">
                                        <input type="text"  className="form-control nice-border" id="categoryNmae" placeholder="product name" ref={nameRef}/>
                                    </div>
                            </div>
                           
                            <div className="form-group  col-6">
                                    <label  className="col-form-label">Price</label>
                                    <div className="">
                                        <input type="text"  className="form-control nice-border" id="categoryNmae" placeholder="product price" ref={priceRef}/>
                                    </div>
                            </div>
                            <div className="form-group  col-6">
                                    <label  className="">Total stock</label>
                                    <div className="">
                                        <input type="text"  className="form-control nice-border" id="categoryNmae" placeholder="total stock" ref={stockRef}/>
                                    </div>
                            </div>
                           
                            <div className="row selection container-fluid m-1 col-6">
                                <select  id="selection " className="col-4 nice-border" ref={categoryRef}>
                                    <option>Choose...</option>
                                    {
                                    excategories.map((data, index) => {
                                            return <option value={data.name} key={index}>{data.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="row m-3">
                                    <button type="button" className="btn btn-secondary col-3" onClick={()=>window.location.href="/app/shop/product/list"} >Cancel</button>
                                    <button type="button" className="btn-outlined btn-primary ml-4 col-3" onClick={()=> {addProduct([nameRef.current.value,categoryRef.current.value,priceRef.current.value,stockRef.current.value]);
                                    window.location.href="/app/shop/product/list"
                                    }} >
                                            Submit
                                            </button>
                                </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        ) 
    }


export default ProductForm;