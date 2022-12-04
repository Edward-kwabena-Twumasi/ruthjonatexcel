import React, {useRef,useState,createRef} from "react";
import SearchTableHead from "./SearchTableHead";
import TdTag from "./TdTag";

const SearchDataTable =(props)=>{
    const quantityRef=useRef(); 
    const elementsRef = useRef(props.tableData.map(() => createRef()));
    console.log(props.tableData)



    const [dataWcheckProp,changedataWcheckProp]=useState(props.tableData);
    const [checked,updateChecked]=useState([]);

    

    const addToInvoice=([id,quantity])=>{
    let recentlyCHeked= dataWcheckProp.filter(data=>data.id==id)[0]
    checked.push(  {"id":recentlyCHeked.id,"name":recentlyCHeked.name,"quantity":parseInt(quantity.value),
    "price":recentlyCHeked.price,"sub_total":parseInt(recentlyCHeked.price)*quantity.value}
    )
    updateChecked(checked)
        console.log(checked)


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