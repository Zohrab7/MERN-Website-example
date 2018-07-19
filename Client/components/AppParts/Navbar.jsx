import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = props => {
    const navbar = () => props.navItems.map((data, i) => <li key={i}><NavLink to={`/${data}`}>{data}</NavLink></li>);
    return (
        <nav className="col-right-1 d-flex align-items-center">
            <ul className="d-flex flex-row justify-content-around nav-1">
                {navbar()}
            </ul>
        </nav>
    );
};