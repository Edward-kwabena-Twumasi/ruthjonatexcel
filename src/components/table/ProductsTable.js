import React from "react";
import TableHead from "./TableHead";
import TdTag from "./TdTag"
import {  removeFromDb } from "../../data/dbFunctions";
import { BsEye } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";



const ProductsTable=(props)=>{
         
      const remove=removeFromDb     
        
        return (
            
            <table className={props.className} >
                <TableHead columnList={props.columnList}></TableHead>
                <tbody>
                        {
                       
                       props.products.map((data, index) => {
                            return (
                            <tr key={index} className="table-row" >
                                {
                                    [Object.keys(data).pop()].concat(Object.keys(data).slice(0,4)).map((key, index) => {

                                        return <TdTag key={index} value={data[key]} isAction="false"></TdTag>
                                    })
                                }
                                <td scope="col" className="row">
                                    <MdOutlineModeEdit></MdOutlineModeEdit>
                                    <BsEye></BsEye>
                                    <AiOutlineDelete onClick={()=>remove(data["id"])}></AiOutlineDelete>
                                    </td>
                                

                                {/* {renderAction(data)} */}
                                
                                
                            </tr>
                            )
                        })
                       
                    }
                </tbody>
            </table>
        ) 
    }
    


// Table.defaultProps = {
//     allowAction: true
// }

export default ProductsTable;