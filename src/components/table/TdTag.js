import React, {Component} from "react";
import AnchorTag from "../Anchortag";

class TdTag extends Component{
    constructor(props){
        super(props);
    }


    render(){
      
            return <td scope="col">{this.props.value}</td>
        
        
    }
}

export default TdTag;