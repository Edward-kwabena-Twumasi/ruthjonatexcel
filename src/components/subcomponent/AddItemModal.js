
const AddItemModal=()=>{
    return (
        <div className="add-invoiceitem-modal" ref={modalRef}>
        <div className=" " >
            <div className="">
                <div className="">
                    <h5 className="" id="exampleModalCenterTitle">Search & Add Product</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span  onClick={()=>toggleModal(false)}>&times;</span>
                    </button>
                </div>
                <div className="">
                    <div className="form-row mb-5 modal-search-box">
                        <div className="col-12">
                            <p><b>Search Box</b></p>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label className="sr-only">Product name</label>
                                <input className="form-control  form-control-sm" placeholder="product name" ref={nameField} onChange={()=>filterProducts(nameField.current.value)}></input>
                            </div>
                        </div>
                        <div className="col-3">
                            <InputFormGroup labelClassName="sr-only" inputClassName="form-control  form-control-sm" placeholder="Product Code"/>
                        </div>
                        <div className="col-3">
                            <SelectFormGroup labelClassName="sr-only" placeholder="Category" selectClassName="custom-select custom-select-sm mr-sm-2" selectData={excategories==null?[]:excategories}/>
                        </div>
                        <div className="col-3">
                            <Button className="btn btn-sm btn-warning w-75" text="Search"/>
                        </div>
                        
                    </div>
                    <div className="w-100">
                        <SearchDataTable className="table table-sm search-tb-font table-striped" columnList={columnList} tableData={products==null?exproducts:products} actionLinkPrefix=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddItemModal