import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from "react-router-dom";
import login from "./login/login";
import signup from "./signup/signup";
import dashboard from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAAHLHdlmHHNMVDknw42M_7WBSESWbp2FY",
  authDomain: "chat-app-dfellner.firebaseapp.com",
  databaseURL: "https://chat-app-dfellner.firebaseio.com",
  projectId: "chat-app-dfellner",
  storageBucket: "chat-app-dfellner.appspot.com",
  messagingSenderId: "294718292264",
  appId: "1:294718292264:web:aec1ca4de5561606a7501d",
  measurementId: "G-VSLZL2T3VB"
})

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={login}></Route>
      <Route path="/signup" component={signup}></Route>
      <Route path="/dashboard" component={dashboard}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

