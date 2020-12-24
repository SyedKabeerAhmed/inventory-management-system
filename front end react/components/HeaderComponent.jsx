import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    
    }
   
    render() {
        return (
            <div>
                 <header>
                 <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand text-white" href="">Inventory Management System</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto pr-5">
      <a className="nav-link text-white active" href="/items">Items</a>
      <a className="nav-link text-white" href="/massors">Massors</a>
      <a type="button" className="nav-link text-white" href="/vendors">Vendors</a>
      <a type="button" className="nav-link text-white" href="/invoice">Invoice</a>
    </div>
  </div>
</nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;