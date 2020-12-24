import React, { Component } from 'react';
import ItemsService from '../services/ItemsService';

class ListItemsComponent extends Component {
      constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.addItems = this.addItems.bind(this);
        this.editItems = this.editItems.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }

    deleteItems(id){
        ItemsService.deleteItems(id).then( res => {
            this.setState({items: this.state.items.filter(item => item.id !== id)});
        });
    }
    editItems(id){
        this.props.history.push(`/update-items/${id}`);
    }
    componentDidMount(){
        ItemsService.getItems().then((res) => {
            this.setState({ items: res.data});
        });
    }
    addItems(){
        this.props.history.push('/add-items');
    }
      
    render() {
        return (
            <div className="pt-2 ">
                <h2 className="text-center pt-5">Items List</h2>
                <div className="row ">
                    <button className="btn btn-primary ml-auto" onClick={this.addItems}>Add Items</button>
                </div>
                <div className="row scrolly">
                    <table className="table text-center table-striped table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                    this.state.items.map(
                                        item => 
                                        <tr key = {item.id}>
                                            <td>{item.id}</td>
                                             <td> {item.name} </td>   
                                             <td> {item.category}</td>
                                             <td> {item.quantity}</td>
                                             <td> {item.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editItems(item.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteItems(item.id)} className="btn btn-danger">Delete </button>
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

export default ListItemsComponent;