import {applyMiddleware, combineReducers, createStore} from "redux";
import {Connection} from "../model/connection";
import {MongoClient} from "mongodb";
import {Slider_reducer} from "../../Client/redux/reducers/sliderReducer";
import {Display_reducer} from "../../Client/redux/reducers/displayReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {Home_page_reducer} from "../../Client/redux/reducers/homePageReducer";


let {createLogger} = require('redux-logger');
const logger = createLogger({
    // ...options
});
// const myLogger = store => next => action => {
//     console.log("Logged action : " ,action);
//     next(action);
// };
//{math:{value: 20, lastValues: Array(0)},user:{user: "John", age: 24, lastValues: Array(0)}}
let {selectOne} = Connection;
const query = {preloadedState: /.*slide.*/};
export let exporter = selectOne(MongoClient, "MyWeb", "web", query)
    .then(data => {
        return createStore(combineReducers({
            slide: Slider_reducer,
            display:Display_reducer,
            homePage:Home_page_reducer
        }), data, applyMiddleware(logger, thunk,promise()));
    });