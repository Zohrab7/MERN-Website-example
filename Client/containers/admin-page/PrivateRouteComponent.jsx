import React from 'react';
import {Route} from "react-router-dom";
export const PrivateRouteComponent = (props) => (
    <Route {...props.routeProps} render={() => (
        props.logged_in ? (
            <section>{props.children}</section>
        ) : (
            <Redirect to={{
                pathname: '/admin',
                state: { from: props.location }
            }} /> )
    )} />
);