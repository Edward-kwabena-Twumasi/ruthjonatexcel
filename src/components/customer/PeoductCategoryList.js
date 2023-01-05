import React  from "react";
import Table from "../../components/table/Table";
import { useState,useRef } from "react";
import { addToCategory } from "../../data/dbFunctions";
import {AiFillCloseCircle, AiFillCloseSquare, AiOutlineClose} from "react-icons/ai"





const ProductCategoryList =()=>{
   
    
    const  columnList = ["ID", "Name", "Total Product", "Action"];

      
    const [status, setStatus] = useState("");
    const categoryName=useRef();
    const modalRef=useRef();
      
    const addCategory=addToCategory(setStatus)
    const toggleModal=(val)=>{
        modalRef.current.classList.toggle("show-modal",val)
    }
    
   
        return (
            <div className=" page">
                {/* Modal */}
                    
                <div className=" add-category-modal" ref={modalRef}>
                        
                        <div className="modal-head">
                            <h5 className="" id="exampleModalLongTitle">New category</h5>
                             <AiFillCloseCircle className="close" onClick={()=>toggleModal(false)}></AiFillCloseCircle >
                        </div>
                        <div className="">
                            
                            <input type="text"  className="form-control w-100 nice-border" id="categoryNmae" placeholder="Category name" ref={categoryName}/>
                                    
                        </div>
                        <div className="modal-actions">
                            <button type="button" className="btn btn-secondary" onClick={()=>toggleModal(false)} >Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>addCategory([categoryName.current.value,"0"])} >Submit</button>
                        </div>
                   
            </div>
                <div className="row  title-n-button w-100">
                    <h3 >Categories</h3>
                    <button  type="button" className="btn btn-primary"  onClick={()=>toggleModal(true)}>Add new</button>
                    {/* <AnchorTag link="/app/shop/product-category/create" className="btn btn-warning " itemValue="Add Category"></AnchorTag> */}
                </div>
                <h5 className="light">{status}</h5>
                <Table className="table " columnList={columnList}  actionLinkPrefix="" data="categories"></Table>
                     
                     
            </div>
        ) 
  
}

export default ProductCategoryList;