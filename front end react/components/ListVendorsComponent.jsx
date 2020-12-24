import React, { Component } from 'react';
import VendorsService from '../services/VendorsService';

class ListVendorsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vendors: []
        }
        this.addVendors = this.addVendors.bind(this);
        this.editVendors = this.editVendors.bind(this);
        this.deleteVendors = this.deleteVendors.bind(this);
    }

    deleteVendors(id){
        VendorsService.deleteVendors(id).then( res => {
            this.setState({vendors: this.state.vendors.filter(vendor => vendor.id !== id)});
        });
    }
    editVendors(id){
        this.props.history.push(`/update-vendors/${id}`);
    }
    componentDidMount(){
        VendorsService.getVendors().then((res) => {
            this.setState({ vendors: res.data});
           
        });
    }
    addVendors(){
        this.props.history.push('/add-vendors');
    }
      
    render() {
        return (
            <div className="pt-2 ">
                <h2 className="text-center pt-5">vendors List</h2>
                <div className="row ">
                    <button className="btn btn-primary ml-auto" onClick={this.addVendors}>Add Vendor</button>
                </div>
                <div className="row">
                    <table className="table text-center table-striped table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                    this.state.vendors.map(
                                        vendor => 
                                        <tr key = {vendor.id}>
                                            <td>{vendor.id}</td>
                                             <td> {vendor.name} </td>   
                                             <td> {vendor.email}</td>
                                             <td> {vendor.contact}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editVendors(vendor.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVendors(vendor.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListVendorsComponent;