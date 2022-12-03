import React, {useState,useRef} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";
import InputFormGroup from "../../components/input/InputFormGroup";
import SelectFormGroup from "../../components/input/SelectFormGroup";
import ProductsTable from "../table/ProductsTable";
import { useLiveQuery } from "dexie-react-hooks";
import {db} from "../../data/db";

const ProductList =()=>{
    const [totalProducts,setTotalProducts]=useState(0);
    const columnList = ["ID", "Name", "Category", "Price", "Stock Amount", "Action"];
    const productsListDiv=useRef() 
    const searchResultsDiv=useRef()  

      const setProducts=(products)=>{
        setTotalProducts(products.length)
        console.log(products);
      }
       const excategories = useLiveQuery(
            () => db.categories.toArray()
          );
   

      if (!excategories) return null;
   
        return (
            <div className="products-page page">
                <div className="row title-n-button">
                    <h3 >Products</h3>
                    <AnchorTag link="/app/shop/product/create" className="btn btn-sm btn-warning " itemValue="Create Product"></AnchorTag>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Box</b></p>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" label="" inputClassName="form-control form-control-sm" placeholder="Product Name"/>
                    </div>
                    <div className="col-2">
                        <SelectFormGroup labelClassName="mb-2" label="" selectClassName="custom-select custom-select-sm" selectData={excategories==null?[]:excategories}/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" inputClassName="form-control form-control-sm" placeholder="Product Price"/>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <input type="submit" className="w-100 btn btn-sm btn-success" value="Search"/>
                        </div>
                    </div>
                </div>
                <div className="searchResults container-fluid" ref={searchResultsDiv}>

                </div>
                <div className="productList" ref={productsListDiv}>
                    <h5 className="">{totalProducts} total products</h5>
                    <ProductsTable className="table table-striped" columnList={columnList}  actionLinkPrefix="" table="products" setProducts={setProducts}></ProductsTable>
                </div>
            </div>
        ) 
    }


export default ProductList;