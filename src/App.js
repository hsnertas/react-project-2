import React, { Component } from 'react'
import './App.css';
import User from './components/user';
import Navbar from "./components/navbar";
import Users from './components/Users';
import AddUser from './components/AddUser'



 class App extends Component {
   
  render() {
    return (
      <div className="container">
  
          <Navbar
          title="User App 2"
          />
          <hr></hr>
          <AddUser/>
            <Users/>
      </div>
    );
  
   
  }
}
  
 
 

export default App;
