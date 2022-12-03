import React, {Component} from "react";
import TableHead from "./TableHead";
import TdTag from "./TdTag"
import { Button } from "bootstrap";
import { useLiveQuery } from "dexie-react-hooks";
import {db} from "../../data/db";



const ProductsTable=(props)=>{
    
    
      const exproducts = useLiveQuery(
        () => db.products.toArray()
      );
      
     

      const remove=(index)=>{
      db.exproducts.where("id").equals(index).delete();
      console.log(index);
      }

      if (!exproducts) return null;
      else { 
        props.setProducts(exproducts)
        return (
            
            <table className={props.className} >
                <TableHead columnList={props.columnList}></TableHead>
                <tbody>
                        {
                       
                       exproducts.map((data, index) => {
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
        ) }
    
}

// Table.defaultProps = {
//     allowAction: true
// }

export default ProductsTable;