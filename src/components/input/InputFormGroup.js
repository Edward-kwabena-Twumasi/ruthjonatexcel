import React, {Component} from "react";
import InputText from "./InputText";


class InputFormGroup extends Component{
    constructor(props){
        super(props);
    }

    renderLabel(){
        
            return <label className={this.props.labelClassName}>{this.props.label}</label>
        
        
    }

    renderInputText(){
        
            return <InputText className={this.props.inputClassName} onChange={this.props.onChange} placeholder={this.props.placeholder} value={this.props.value} ref={this.props.ref}/>
        
    }


    render(){
        return (
            <div className="form-group">
                {this.renderLabel()}
                {this.renderInputText()}
                
            </div>
        )
    }
}

InputFormGroup.defaultProps = {
    inputClassName: "form-control ",
    placeholder: "",
    label: "",
    value: "",
    isReadOnly: false
}

export default InputFormGroup;