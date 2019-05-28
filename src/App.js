import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from "firebase";
import Router from "./Router";


export default class App extends Component  {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD4Et9HKuelHf_dv8HdHACtBbtR5GDnHtQ",
            authDomain: "last-2563d.firebaseapp.com",
            databaseURL: "https://last-2563d.firebaseio.com",
            projectId: "last-2563d",
            storageBucket: "last-2563d.appspot.com",
            messagingSenderId: "649137388196",
            appId: "1:649137388196:web:6fe9b0e62d17149d"
        });
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}