import React, { Component } from 'react';

class InvoiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
       
        }

        }
    render() {
        return (
            <div>
                <div className="container pt-3 pb-5 mt-5">
                    <div className="row pt-4 d-flex justify-content-center scrolly">
                        <div className="col-10 card p-4">
                            <div className="card-header border">
                                <div className="row pt-2">
                                    <div className="col-6">
                                    <div className="form-group  mb-0  d-flex">
                                        <label>Invoice No:</label>
                                        <input placeholder="Invoice #" name="inv" className="form-control form-cntrl w-75 inv" />
                                     </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="form-group mb-0  d-flex">
                                        <label>Invoice Date:</label>
                                        <input placeholder="Invoice Date" name="inv-dtae" className="form-control form-cntrl w-75 inv" />
                                    </div>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                <div className="col-12">
                                    <div className="form-group mb-0  d-flex">
                                        <label>M/S:</label>
                                        <input placeholder="Invoice Date" name="inv-dtae" className="form-control form-cntrl inv" />
                                    </div>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-6">
                                    <div className="form-group  mb-0 d-flex">
                                        <label>Order No:</label>
                                        <input placeholder="Order #" name="order" className="form-control form-cntrl w-75 inv" />
                                    </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="form-group  mb-0 d-flex">
                                        <label>Dept No:</label>
                                        <input placeholder="Dept No" name="dept" className="form-control form-cntrl w-75 inv" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border  mt-3">
                                <div className="row px-2  ">
                                <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Qty</th>
      <th scope="col">Items</th>
      <th scope="col">Rate</th>
      <th scope="col">per</th>
      <th scope="col">Ammount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    <tr>
      <td className="p-0 m-0 qty"> 
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="qty" className="form-control  invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 items">
      <div className="form-group mb-0 p-0  d-flex">
        <input placeholder="" name="items" className="form-control   invoice-table" />
     </div>    
      </td>
      <td className="p-0 m-0 rate">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="rate" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 per">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="per" className="form-control invoice-table" />
     </div>
      </td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control  invoice-table" />
     </div>
      </td>
    </tr>
    
    <tr>  
      <td colspan="4" className="text-center"><strong>Total</strong></td>
      <td className="p-0 m-0 ammount">
      <div className="form-group mb-0 p-0 d-flex">
        <input placeholder="" name="ammount" className="form-control invoice-table" />
     </div>
      </td>
    </tr>
  </tbody>
</table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InvoiceComponent;