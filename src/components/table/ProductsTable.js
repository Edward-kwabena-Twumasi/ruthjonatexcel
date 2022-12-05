import React from "react";
import TableHead from "./TableHead";
import TdTag from "./TdTag"
import {db} from "../../data/db";
import { existingProducts, removeFromDb } from "../../data/dbFunctions";



const ProductsTable=(props)=>{
    
    
     
      const remove=removeFromDb
      console.log(props.products)
     
        
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
                                    <h5>Edit</h5>
                                    <h5>view</h5>
                                    <h5 onClick={()=>remove(data["id"])}>Remove</h5>
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