import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";
import InputFormGroup from "../../components/input/InputFormGroup";
import SelectFormGroup from "../../components/input/SelectFormGroup";
import ProductsTable from "../table/ProductsTable";


class ProductList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Category", "Price", "Stock Amount", "Action"];
       

        this.selectData = [
            {"id": 1, "name": "Electronic Accessories"},
            {"id": 2, "name": "Health & Beauty"},
            {"id": 3, "name": "Home & Lifestyle"}
        ]
    }


    render(){
        return (
            <div className="products-page page">
                <div className="row title-n-button">
                    <h3 >Products</h3>
                    <AnchorTag link="/app/shop/product/create" className="btn btn-sm btn-warning " itemValue="Create Product"></AnchorTag>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Box</b></p>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" label="" inputClassName="form-control form-control-sm" placeholder="Product Name"/>
                    </div>
                    <div className="col-2">
                        <SelectFormGroup labelClassName="mb-2" label="" selectClassName="custom-select custom-select-sm" selectData={this.selectData}/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" inputClassName="form-control form-control-sm" placeholder="Product Price"/>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <input type="submit" className="w-100 btn btn-sm btn-success" value="Search"/>
                        </div>
                    </div>
                </div>
                <ProductsTable className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix="" table="products"></ProductsTable>
            </div>
        ) 
    }
}

export default ProductList;