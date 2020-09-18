/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/pages/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/pages/LandingPage.js";
import RestaurantPage from "views/pages/RestaurantPage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      
      <Route
        path="/restaurant/:id"
        render={(props) => <RestaurantPage {...props} />}
      />

{/* <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      
      
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      /> */}

<Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
