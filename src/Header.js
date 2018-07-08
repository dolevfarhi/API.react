import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                getAll
                </NavLink>
                <NavLink to="/getFreeBooksByName/" activeStyle={this.active}>
                getFreeBookByName
                </NavLink>
                 <NavLink to="/getFreeBooksByDates/" activeStyle={this.active}>
                getFreeBooksByDates 
                </NavLink>
            </div>
);}}
export default Header;