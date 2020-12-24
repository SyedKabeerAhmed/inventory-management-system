import React, { Component } from 'react';
import VendorsService from '../services/VendorsService';

class AddVendorsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          name:'',
          email:'',
          contact:''

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.saveVendors = this.saveVendors.bind(this);
         
    }


    saveVendors = (e) =>{
        e.preventDefault();
        let vendors = {name: this.state.name, email: this.state.email, contact: this.state.contact};
        console.log(JSON.stringify(vendors));

        VendorsService.addVendors(vendors).then(res =>{
            this.props.history.push('/vendors')
        })
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
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center p-4"> Add Vendors</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Vendors Name:</label>
                                        <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Contact:</label>
                                        <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.changeContactHandler}/>
                                    </div>
                                   
                                    <button className="btn btn-success" onClick={this.saveVendors}>Save</button>
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

export default AddVendorsComponent;