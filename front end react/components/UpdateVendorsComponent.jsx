import React, { Component } from 'react';
import VendorsService from '../services/VendorsService';

class UpdateVendorsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
          name:'',
          email:'',
          contact:''
          

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.updateVendors = this.updateVendors.bind(this);
         
    }

    componentDidMount(){
        VendorsService.getVendorsById(this.state.id).then( (res) =>{
            let vendors = res.data;
            this.setState({name: vendors.name,
            email: vendors.email,
            contact: vendors.contact
               
        });
        });
    }

    updateVendors = (e) =>{
        e.preventDefault();
        let vendors = {name: this.state.name, email: this.state.email, contact: this.state.contact};
        console.log(JSON.stringify(vendors));
            VendorsService.updateVendors(vendors, this.state.id).then( res => {
                this.props.history.push('/vendors');
            });
       
        
    }

    changeNameHandler= (event) =>{
        this.setState({name: event.target.value});
    }
    changeEmailHandler= (event) =>{
        this.setState({email: event.target.value});
    }
    changeContactHandler= (event) =>{
        this.setState({contact: event.target.value});
    }
  


    cancel(){
        this.props.history.push('/vendors');
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row pt-5 mt-5">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center p-5"> Update Vendors</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Vendors Name:</label>
                                        <input placeholder="Vendors Name" name="vendors" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Contact:</label>
                                        <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.changeContactHandler}/>
                                    </div>
          
                                    <button className="btn btn-success" onClick={this.updateVendors}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
       

export default UpdateVendorsComponent;