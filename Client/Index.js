import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {hydrate} from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from "./containers/App";
import "babel-polyfill";
//------------ Redux Store ----------------
//import Store with Promise from Client Store
import {exporter} from "./redux/store/store";
//--------------------------------------------------
let initialData = JSON.parse(document.querySelector('#initial-data').getAttribute('data-json'));
console.log(initialData);
// const decrpreloadedState=new Buffer(initialData.preloadedState,"hex").toString();
// let preloadedState=JSON.parse(decrpreloadedState);

//------if Store has been Created in promise then set Store to Provider-----
exporter.then(store => {
    hydrate(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="*" render={() =><App {...initialData}/>}/>
                </Switch>
            </Router>
        </Provider>
        , document.querySelector(".my-container"));
});