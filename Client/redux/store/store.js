import {applyMiddleware, combineReducers, createStore} from "redux";
import {Slider_reducer} from "../reducers/sliderReducer";
import {Display_reducer} from "../reducers/displayReducer";
import {Home_page_reducer} from "../reducers/homePageReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import fetch from "node-fetch";



let { createLogger } =require('redux-logger');
const logger = createLogger({
    // ...options
});
// const myLogger = store => next => action => {
//     console.log("Logged action : " ,action);
//     next(action);
// };
//------Get Redux Preloaded state from Server /Api route with Promise-------------------------------
export let exporter = fetch("http://localhost:3001/api", {method: "post"})
//---------wait for Preloaded state Json---------
    .then(data => {
        return data.json()
    })
    .then(data => {
//---------get Preloaded state Json SET to STORE Create Store--------
        return createStore(combineReducers({slide:Slider_reducer,display:Display_reducer,homePage:Home_page_reducer}), data,applyMiddleware(logger,thunk,promise()));
    });
//------------------------------------------------------------------------------------------------------------
