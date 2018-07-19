import React from "react";
import {NavLink} from 'react-router-dom';

export const Announcement = props => {
    console.log("array slideCategories : ", props.slideCategories);
    console.log("current item : ", props.displayroute);
    console.log("index : ", props.slideCategories.indexOf(props.displayroute));
    return (
        <section className="ad jumbotron d-flex flex-column">
            <section className={`${props.defAnimClass}`}>
                <NavLink to={`/${props.displayroute}`}>{props.displaydata}</NavLink>
            </section>
            <section className="d-flex counter align-self-end justify-content-end align-items-end">
                <section
                    className="checker">{props.slideCategories.indexOf(props.displayroute) + 1}/{props.slideCategories.length}</section>
            </section>
        </section>
    );

};