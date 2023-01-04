import { useLiveQuery } from "dexie-react-hooks";
import {db} from "./db";

export const totalCategories=()=>{ 
  
    return db.categories.count((val)=>val)
    
  };
export const totalProducts=()=>{
 
  return db.products.count((val1)=>val1)
   
};
export const totalInvoices=()=>{
 
  return db.invoices.count((val1)=>val1)
   
};

export const removeFromDb=(id)=>{
    db.products.where("id").equals(id).delete();
    console.log(id);
    }
    export const removeCategory=(id)=>{
      db.categories.where("id").equals(id).delete();
      console.log(id);
      }  

export const existingCategories = ()=>{
    return useLiveQuery(
    () => db.categories.toArray()
    )

}

export const existingProducts = ()=> {
    return  useLiveQuery(
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

        // Add the new categoriy!
        if (name.length>0) {
          const id = await db.categories.add({
            name,
            total_products
          });
    
          setStatus(`Category ${name} successfully added. Got id ${id}`);
        } else {
          setStatus(`Please provide category name`);
        }
       
       
      } catch (error) {
        setStatus(`Failed to add ${name}: ${error}`);
      }
}}
export const addToInvoices=(setStatus)=>{
  return async ([customer,total_amount,payment_status])=>{
    const date= new Date();
    const idFromDate=date.getTime()
    const dateString=(date.toLocaleString())
  try {
    
      // Add the new categoriy!
      const id = await db.invoices.add({
        customer,
       idFromDate,
        total_amount,
        payment_status,
        dateString
      });

      setStatus(`Category ${idFromDate} successfully added. Got id ${id}`);
     
    } catch (error) {
      setStatus(`Failed to add ${idFromDate}: ${error}`);
    }
}}

export const addToProducts=(setStatus)=>{
 return async ([name,category_name,price,total_count])=>{

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
}
