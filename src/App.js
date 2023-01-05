import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import RootPage from "./pages/admin/RootPage";
import CustomerRootPage from "./pages/customer/RootPage";
import { FaGithub, FaGlobe, FaGoogle, FaLinkedin, FaPhone, FaTwitter, FaWeebly } from "react-icons/fa";



function App() {
  return (
      <div className="App ">
        <div className='body'> 
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/app" component={CustomerRootPage}></Route>
              <Route exact path="/login" component={AuthPage}></Route>
              <Route exact path="/registration" component={AuthPage}></Route>
              <Route exact path="/password-reset-account-verify" component={AuthPage}></Route>
              <Route exact path="/password-reset" component={AuthPage}></Route>
              <Route path="/admin" component={RootPage}></Route>
              {/* <Route exact path="*" component={NotFoundPage} /> */}
            </Switch>
          </Router>
        </div>      
        <div className='footer  d-flex flex-col'>
        <div className='contact-dev'>
          <a target={"blank"} href="https://edward-io.onrender.com"  className="">{<FaGlobe/>}</a > 
          <a target={"blank"} href="mailto:createdliving1000@gmail.com"  className=" ">{<FaGoogle/>}</a >
          <a target={"blank"} href="tel:+233 552489602"  className="">{<FaPhone/>}</a >
          <a target={"blank"} href="https://twitter.com/EdwardsTwums"  className="">{<FaTwitter/>}</a > 

        </div>
          <div className='cr font-weight-light'>
          <h5 >Copyright © 2023 <span className='font-weight-bold'>Samsoft Rx</span> . All rights reserved.</h5>
          </div>
         
          
        </div>
      </div>
    );
}

export default App;
