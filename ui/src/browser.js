import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import getStore from "./store";
import history from "./history";
import App from "./components/BApp";

const store = getStore(window.__STORE_DATA__);
Reflect.deleteProperty(window, '__STORE_DATA__'); // eslint-disable-line
// delete window.__STORE_DATA__; // eslint-disable-line
// console.log("__isBrowser__--------", __isBrowser__); // eslint-disable-line
ReactDOM.hydrate(
    <Router history={history}><App store={store} /></Router>,
    document.getElementById("root")
);
