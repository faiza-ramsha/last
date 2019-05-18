import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

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
             return(
                <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm/>
                  </View>  

              </Provider>  
             );
            }
        }

