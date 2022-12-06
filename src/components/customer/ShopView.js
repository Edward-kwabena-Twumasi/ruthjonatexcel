import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";


class ShopView extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="shop-view-page page">
                
                <h3 className="ml-3 page-title">Shop Details</h3>
               
                <div className="w-100">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                <h5 className="mt-2 mb-2">Shop Owner Information</h5>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Maa Ruth" label="First Name" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Ruth" label="Last Name" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="ruthjonatexcel@gmail.com" label="Email" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Active" label="Status" />
                                </div>


                                <div className="col-12 mt-3">
                                <h5 className="mt-2 mb-2">Shop Information</h5>

                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Ruthjonatexcel Organic Food Shop" label="Shop Name" />
                                    
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="2" label="Total Employees" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="500" label="Total Products" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Active" label="Status" />
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-sm btn-warning" itemValue="Edit Shop" link="/app/shop/edit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        ) 
    }
}

export default ShopView;