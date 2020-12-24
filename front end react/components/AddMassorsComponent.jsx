import React, { Component } from 'react';
import MassorsService from '../services/MassorsService';

class AddMassorsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          name:'',
          category:'',
          quantity:'',
          price:''

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveMassors = this.saveMassors.bind(this);
         
    }


    saveMassors = (e) =>{
        e.preventDefault();
        let massors = {name: this.state.name, category: this.state.category, quantity: this.state.quantity, price: this.state.price};
        console.log(JSON.stringify(massors));

        MassorsService.addMassors(massors).then(res =>{
            this.props.history.push('/massors')
        })
    }

    changeNameHandler= (event) =>{
        this.setState({name: event.target.value});
    }
    changeCategoryHandler= (event) =>{
        this.setState({category: event.target.value});
    }
    changeQuantityHandler= (event) =>{
        this.setState({quantity: event.target.value});
    }
    changePriceHandler= (event) =>{
        this.setState({price: event.target.value});
    }


    cancel(){
        this.props.history.push('/massors');
    }
    
    render() {
        return (
            <div>
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center p-4"> Add Massors</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Massor Name:</label>
                                        <input placeholder="Massors Name" name="massorsName" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Category:</label>
                                        <input placeholder="Category" name="category" className="form-control" value={this.state.category} onChange={this.changeCategoryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity:</label>
                                        <input placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Price:</label>
                                        <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveMassors}>Save</button>
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

export default AddMassorsComponent;