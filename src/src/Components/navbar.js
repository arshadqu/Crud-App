import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Tutorials from './tutorials';
import AddTutorials from './add';
 class Navbar extends React.Component {
     render() { 
         return(
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container-fluid">
                <Link to={"/tutorials"} className="navlink">Tutorials</Link>
                <Link to={"/add"} className="navlink">Add</Link>
                </div>
            </nav>
         );
     }
     
 }
  
 export default Navbar;