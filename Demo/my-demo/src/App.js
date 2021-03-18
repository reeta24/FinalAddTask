import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

// import { BrowserRouter, Route, Link } from "react-router-dom";
import Table from "./componeat/Table";

import ShowDataTable from "./componeat/ShowDataTable";
// import Form from "./componeat/Form";
// import Home from "./componeat/Home";
// import Search from "./componeat/Search";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        {/* <Form /> */}
        {/* <Table /> */}
        <ShowDataTable />
        {/* <div>
          <ul>
            <li> <h1><a href="Home">Home</a></h1></li>
            <li><h1><a href="About">About</a></h1></li>
            <li><h1><a href="Contact">Contact</a></h1></li>
            {this.props.children}
          </ul>
        </div> */}
        {/* <Search /> */}
      </div>
    );

  }
}
export default App;
