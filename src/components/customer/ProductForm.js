import React, {useRef,useState} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";
import TextAreaFormGroup from "../input/TextAreaFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";
import { useLiveQuery } from "dexie-react-hooks";
import {db} from "../../data/db";


const ProductForm =()=>{
    
    const [status, setStatus] = useState("");

    const nameRef=useRef();
    const categoryRef=useRef();
    const priceRef=useRef();
    const stockRef=useRef();

  
    const excategories = useLiveQuery(
        () => db.categories.toArray()
      );
    const addProduct=async ([name,category_name,price,total_count])=>{

        try {

            // Add the new friend!
            const id = await db.products.add({
              name,
              category_name,
              price,
              total_count
            });
      
            setStatus(`Product ${name} successfully added. Got id ${id}`);
           
          } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
          }
    }


     if (!excategories) return null;
        return (
            <div className="create-product-page page">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/product/list" className="btn btn-primary float-right" itemValue="Back to Product List"></AnchorTag>
                    <h4>Create Product</h4>
                </div>
                <div className="w-80">
                    <form>
                        <div className="container-fluid">
                           <div className="form-group col-12">
                                    <label  className="col-sm-2 col-form-label">Name</label>
                                    <div className="">
                                        <input type="text"  className="form-control" id="categoryNmae" placeholder="product name" ref={nameRef}/>
                                    </div>
                            </div>
                            <div className="row container-fluid">
                                <div className="form-group  col-6">
                                        <label  className="">Price</label>
                                        <div className="">
                                            <input type="text"  className="form-control" id="categoryNmae" placeholder="product price" ref={priceRef}/>
                                        </div>
                                </div>
                                <div className="form-group  col-6">
                                        <label  className="">Total stock</label>
                                        <div className="">
                                            <input type="text"  className="form-control" id="categoryNmae" placeholder="total stock" ref={stockRef}/>
                                        </div>
                                </div>
                            </div>
                            <div className="row selection container-fluid m-1">
                                <select  id="selection " className="col-4" ref={categoryRef}>
                                    <option>Choose...</option>
                                    {
                                    excategories.map((data, index) => {
                                            return <option value={data.name} key={index}>{data.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="row m-3">
                                    <button type="button" className="btn btn-secondary col-3" >Cancel</button>
                                    <button type="button" className="btn btn-primary ml-4 col-3" onClick={()=>
                                        addProduct([nameRef.current.value,categoryRef.current.value,priceRef.current.value,stockRef.current.value])} >
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