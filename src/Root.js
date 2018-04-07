import React, {Component} from "react";
import Header from "../src/AppComponents/Header/Header.Container";
import {Router, Route, browserHistory} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import Logger from "redux-logger";
import Reducers from "../src/CompineReducer";
import thunk from "redux-thunk";

const Store = createStore(Reducers, applyMiddleware(Logger, thunk));

class Root extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router history={browserHistory}>
                   <Route path="/" component={Header}></Route>
                </Router>
            </Provider>
        );
    };
}
export default Root;

