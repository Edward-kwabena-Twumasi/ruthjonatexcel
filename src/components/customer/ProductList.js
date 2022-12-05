import React, {useState,useRef,useEffect} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../../components/input/InputFormGroup";
import SelectFormGroup from "../../components/input/SelectFormGroup";
import ProductsTable from "../table/ProductsTable";
import { existingCategories, existingProducts, removeFromDb } from "../../data/dbFunctions";


const ProductList =()=>{

    const columnList = ["ID","Name","Category","Price","Stock Amount","Action"];
    let [products,setProducts]=useState([]);
    const productsListDiv=useRef() 
    const nameField=useRef(); 
    const remove=removeFromDb
    const excategories =existingCategories()
    const exproducts = existingProducts()

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

   
      if (!exproducts) return null;
   
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
                            <input type="text" onChange={()=>filterProducts(nameField.current.value)} className="form-control form-control-sm" placeholder="Product Name"  ref={nameField}/> 
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
                
                
                <div className="productList" ref={productsListDiv}>
                    <h5 className="">{exproducts.length} total products</h5>
                    <ProductsTable className="table table-striped" columnList={columnList}  products={products==null? exproducts:products}></ProductsTable>
                </div>
            
                
            </div>
        ) 
    }

export default ProductList;