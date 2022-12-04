import React, {useState,useRef} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../../components/input/InputFormGroup";
import SelectFormGroup from "../../components/input/SelectFormGroup";
import ProductsTable from "../table/ProductsTable";
import { existingCategories, removeFromDb } from "../../data/dbFunctions";


const ProductList =()=>{

    const [totalProducts,setTotalProducts]=useState([]);
    const [searchSuggestions,setSearchSuggestions]=useState([]);
    const [searchkey,setSearchkey]=useState("");

    const columnList = ["ID","Name","Category","Price","Stock Amount","Action"];
    
    const productsListDiv=useRef() 
    const searchResultsDiv=useRef() 
    const nameField=useRef(); 

    const setProducts=(products)=>{
        setTotalProducts(products)
       
    }
    const remove=removeFromDb
    const excategories =existingCategories()

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
                        <div className="form-group">
                            <input type="text" onChange={()=>filterProducts(totalProducts)} className="form-control form-control-sm" placeholder="Product Name"  ref={nameField}/> 
                        </div>
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
                    <h5 className="">{totalProducts.length} total products</h5>
                    <ProductsTable className="table table-striped" columnList={columnList}  actionLinkPrefix="" table="products" setProducts={setProducts}></ProductsTable>
                </div>
            
                
            </div>
        ) 
    }

export default ProductList;