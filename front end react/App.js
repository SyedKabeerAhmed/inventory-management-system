import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListItemsComponent from './components/ListItemsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddItemsComponent from './components/AddItemsComponent';
import UpdateItemsComponent from './components/UpdateItemsComponent';
import ListMassorsComponents from './components/ListMassorsComponents';
import AddMassorsComponent from './components/AddMassorsComponent';
import UpdateMassorsComponent from './components/UpdateMassorsComponent';
import UpdateVendorsComponent from './components/UpdateVendorsComponent';
import AddVendorsComponent from './components/AddVendorsComponent';
import ListVendorsComponent from './components/ListVendorsComponent';
import InvoiceComponent from './components/InvoiceComponent';

function App() {
  return (
    <div>
     <Router>
         <HeaderComponent />
         <div className="container">
           <Switch>
             <Route path = "/" exact component = {ListItemsComponent}></Route>
             <Route path = "/items" component = {ListItemsComponent}></Route>
             <Route path = "/add-items" component = {AddItemsComponent}></Route>
             <Route path = "/update-items/:id" component = {UpdateItemsComponent}></Route>
             <Route path = "/massors" component = {ListMassorsComponents}></Route>
             <Route path = "/add-massors" component = {AddMassorsComponent}></Route>
             <Route path = "/update-massors/:id" component = {UpdateMassorsComponent}></Route>
             <Route path = "/vendors" component = {ListVendorsComponent}></Route>
             <Route path = "/add-vendors" component = {AddVendorsComponent}></Route>
             <Route path = "/update-vendors/:id" component = {UpdateVendorsComponent}></Route>
             <Route path = "/invoice" component = {InvoiceComponent}></Route>

           </Switch>
         </div>
         <FooterComponent />
   
     </Router>
</div>
  );
}

export default App;
