import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from "react-router-dom";
import login from "./components/login/login";
import signup from "./components/signup/signUp";
import dashboard from "./components/dashboard/dashBoard";
import Navbar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import Myprofile from "./components/my-profile/myProfile";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBR4Kqer9QUaWX2xCDkchRo2IcvT_s9sRU",
  authDomain: "d-scuss-d57d1.firebaseapp.com",
  databaseURL: "https://d-scuss-d57d1.firebaseio.com",
  projectId: "d-scuss-d57d1",
  storageBucket: "d-scuss-d57d1.appspot.com",
  messagingSenderId: "533982431794",
  appId: "1:533982431794:web:6ed3131b5d221f1900ca2b",
  measurementId: "G-EDS1T47KL7"
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    localStorage.setItem("loggedIn", true);
  } else {
    localStorage.setItem("loggedIn", false);
  }
});


const routing = (
  <Router>
    <div id="routing-container">
    <Navbar />
      <Route exact path="/" component={dashboard}></Route>
      <Route exact path="/signup" component={signup}></Route>
      <Route exact path="/login" component={login}></Route>
      <Route render={props => <Myprofile {...props} />} exact path="/Myprofile/:id"></Route>
    <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

