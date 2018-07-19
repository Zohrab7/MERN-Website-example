import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";

class About extends Component {
    render() {
        return (
            <section>
                hello from About Component
                <br/>
                <NavLink to="/">
                    <button className="btn btn-info">HOME</button>
                </NavLink>
            </section>
        );
    }
}

export default connect()(About);