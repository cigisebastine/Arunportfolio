import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Contact from "./components/contact.component";

//import logo from "./logo.png";
import logo from "./logo.svg";
const containerwidth = {
  // color: 'blue',
  // backgroundImage: 'url(' + imgUrl + ')',
  width: '100%',
};
class App extends Component {
  render() {
    return (
      <Router>
        
        {/* <div className="container-fluid"> */}
        <div style={containerwidth} >
         
          {/* <p>hi</p> */}
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a> */}
            <Link to="/" className="navbar-brand">Arun Balakrishnan </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/profile" className="nav-link">Portfolio</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} /> 
          <Route path="/profile" component={Profile} />        
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
