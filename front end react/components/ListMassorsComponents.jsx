import React, { Component } from 'react';
import MassorsService from '../services/MassorsService';

class ListMassorsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            massors: []
        }
        this.addMassors = this.addMassors.bind(this);
        this.editMassors = this.editMassors.bind(this);
        this.deleteMassors = this.deleteMassors.bind(this);
    }

    deleteMassors(id){
        MassorsService.deleteMassors(id).then( res => {
            this.setState({massors: this.state.massors.filter(massor => massor.id !== id)});
        });
    }
    editMassors(id){
        this.props.history.push(`/update-massors/${id}`);
    }
    componentDidMount(){
        MassorsService.getMassors().then((res) => {
            this.setState({ massors: res.data});
        });
    }
    addMassors(){
        this.props.history.push('/add-massors');
    }
      
    render() {
        return (
            <div className="pt-2 ">
                <h2 className="text-center pt-5">Massors List</h2>
                <div className="row">
                    <button className="btn btn-primary ml-auto" onClick={this.addMassors}>Add Massors</button>
                </div>
                <div className="row scrolly">
                    <table className="table text-center table-striped table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Massor code</th>
                                <th>Massor Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                    this.state.massors.map(
                                        massor => 
                                        <tr key = {massor.id}>
                                            <td> {"Mc-" + massor.id}</td>
                                             <td> {massor.name} </td>   
                                             <td> {massor.category}</td>
                                             <td> {massor.quantity}</td>
                                             <td> {massor.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editMassors(massor.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMassors(massor.id)} className="btn btn-danger">Delete </button>
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
export default ListMassorsComponents;