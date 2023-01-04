import React, {Component} from "react";


class InputText extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return <input type="text" onChange={this.props.onChange} className={this.props.className+" nice-border"} placeholder={this.props.placeholder} defaultValue={this.props.value} ref={this.props.ref}/>
    }
}

export default InputText;