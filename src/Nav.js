import React, { Component } from 'react';
import {NavLink,BrowserRouter as Router} from 'react-router-dom';
class NavBar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Person</NavLink>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/list">Person List </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add">Person add </NavLink>
                </li>
                
                </ul>
            </div>
            </nav>
        );
    }
}
export default NavBar;