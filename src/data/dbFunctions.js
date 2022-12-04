import { useLiveQuery } from "dexie-react-hooks";
import {db} from "./db";

export const removeFromDb=(index)=>{
    db.exproducts.where("id").equals(index).delete();
    console.log(index);
    }

export const existingCategories = ()=>{
    return useLiveQuery(
    () => db.categories.toArray()
    )

}

export const existingProducts = ()=>{
    return useLiveQuery(
    () => db.products.toArray()
    )

}
export const existingInvoices = ()=>{
    return useLiveQuery(
    () => db.invoices.toArray()
    )

}

export const addToCategory=(setStatus)=>{
    return async ([name,total_products])=>{
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
}}
