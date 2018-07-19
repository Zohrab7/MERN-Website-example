import path from "path";
import express from "express";
import morgan from 'morgan';
import {Provider} from "react-redux";
import {StaticRouter as ServerRouter, Switch, Route} from 'react-router-dom';
import React from "react";
import App from "../Client/containers/App";
import {renderToNodeStream} from "react-dom/server";
import {Layout2} from "../Client/layouts/Layout2.js";
import {exporter} from "./store/store";
import bodyParser from "body-parser";
import {MongoClient} from "mongodb";
import {Connection} from "./model/connection";


let
    app = express(),
    port = process.env.port || 3001,
    router = express.Router();


//post

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// let encryptedString = new Buffer(JSON.stringify(preloadedState)).toString("hex");
// console.log(encryptedString);

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(morgan("dev"));
const context = {};

//----------Set /Api to Server Store preloadedState----- from Mongo---------
router.post("/api", (req, res) => {
//------if Store has been created then Set preloadedState-------
    exporter.then(store => {
        console.log("/api ", store.getState());
        res.status(200).json(store.getState());
        res.end();
    });
});
//-----inital data from Server to Client-----
const initialData = {
    switch: true
};

//admin mailbox
router.post("/admin", (req, res) => {
    const checkName = /^[a-zA-Z ]/,
        checkEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        checkMessage = /[a-zA-Z][0-9]{500}$/;
    console.log(req.body);
    let {save, selectAll} = Connection;
    save(MongoClient, "admin", "messages", req.body);
});

// console.log("Server Initial data : ", initialData);
router.get("*", (req, res) => {
    console.log(req.params["0"]);
    exporter.then(store => {
        console.log("Server STORE : ", store);
        res.write("<!DOCTYPE html>");
        renderToNodeStream(
            <Layout2 title="Hello from React SSR" initialData={JSON.stringify(initialData)}>
                <Provider store={store}>
                    <ServerRouter location={req.url} context={context}>
                        <Switch>
                            <Route exact path="*" render={() => <App {...initialData}/>}/>
                        </Switch>
                    </ServerRouter>
                </Provider>
            </Layout2>).pipe(res);
    })
});

app.use("/", router);
app.use("/contact", router);
app.use("/about", router);

app.listen(port, () => console.log(`Server is Running... on the port ${port}`));