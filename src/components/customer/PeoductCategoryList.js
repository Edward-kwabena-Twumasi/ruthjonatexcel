import React, {Component} from "react";
import Table from "../../components/table/Table";
import { useState,useReducer,useRef } from "react";
import { useLiveQuery } from "dexie-react-hooks";

import {db} from "../../data/db";




const ProductCategoryList =()=>{
   
    
    const  columnList = ["ID", "Name", "Total Product", "Action"];
    let  tableData = [
            {"id": 1, "name": "Electronic Accessories", "total_products": "12"},
            {"id": 2, "name": "Clothing", "total_products": "30"},
            {"id": 3, "name": "Health & Beauty", "total_products": "30"},
            {"id": 4, "name": "Home & Lifestyle", "total_products": "30"}
        ]
     
    
    const [status, setStatus] = useState("");
    const categoryName=useRef();
      
    const addCategory=async ([name,total_products])=>{
        try {

            // Add the new friend!
            const id = await db.categories.add({
              name,
              total_products
            });
      
            setStatus(`Category ${name} successfully added. Got id ${id}`);
           
          } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
          }
    }
    



   
        return (
            <div className="category-list-page page">
                <div className="row title-n-button">
                    <h3 >Product Category List</h3>
                    <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add new</button>
                    {/* <AnchorTag link="/app/shop/product-category/create" className="btn btn-warning " itemValue="Add Category"></AnchorTag> */}
                </div>
                <h5>{status}</h5>
                <Table className="table table-striped" columnList={columnList}  actionLinkPrefix="" ></Table>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">New category</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                              <input type="text" readonly class="form-control" id="categoryNmae" placeholder="Oils" ref={categoryName}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={()=>addCategory([categoryName.current.value,"0"])} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        ) 
  
}

export default ProductCategoryList;