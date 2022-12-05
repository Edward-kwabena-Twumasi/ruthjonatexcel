import React, {useRef,useState,createRef} from "react";
import SearchTableHead from "./SearchTableHead";
import TdTag from "./TdTag";
import useInvoiceItemsStore from "../../data/temporaryStore";



const SearchDataTable =(props)=>{

    const elementsRef = useRef(props.tableData.map(() => createRef()));


    const [produtsToAdd,changeprodutsToAdd]=useState(props.tableData);
    const [checked,updateChecked]=useState([]);
    
    const addInvoiceItem=useInvoiceItemsStore((state) => state.addItems)
  

    const addToInvoice=([id,quantity])=>{

        let recentlySelected= produtsToAdd.filter(data=>data.id==id)[0]
        checked.push( 
        {"id":recentlySelected.id,"name":recentlySelected.name,"quantity":parseInt(quantity.value),
        "price":recentlySelected.price,"sub_total":parseInt(recentlySelected.price)*quantity.value}
        )  
        updateChecked(checked)
        addInvoiceItem(checked.pop())

    }

    const selectionOptions=(total)=>{
        let options=[]
        for (let index = 1; index <=total; index++) {
        options.push( <option value={index} key={index}>{index}</option>)
        
         }
        return options
    }

   
        return (
            <table className={props.className}>
                <SearchTableHead columnList={props.columnList}></SearchTableHead>
                <tbody>
                    {
                        props.tableData.map((data, index) => {
                            const reorderdKeys= [Object.keys(data).pop()].concat(Object.keys(data).slice(0,4));
                            reorderdKeys.splice(2,1)
                            return (
                            <tr key={index}>
                                {
                               
                               reorderdKeys.map((key, indx) => {
                                        return <TdTag key={indx} value={data[key]} isLinked="false"></TdTag>
                                    })
                                    
                                }
                                <td scope="col" className="row">
                                    {
                                        
                                    }
                                    {
                                        <select  id={data.id}  ref={elementsRef.current[index]}>
                                       
                                        {
                                           

                                      selectionOptions(data.total_count)
                                            
                                        }
                                    </select>
                                    }

                                </td>
                               <td>
                               <button className="text-light btn btn-info text-light"  onClick={()=>addToInvoice([data.id,elementsRef.current[index].current])} >+</button>

                               </td>
                                 
                            </tr>
                            )
                            
                        })
                    }
                   
                </tbody>
            </table>
        ) 
    }


export default SearchDataTable;