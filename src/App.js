import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link ,Redirect} from 'react-router-dom';
import Index from "views/pages/Index.js";
import Login from "views/pages/LoginPage.js";
import RestaurantPage from "views/pages/RestaurantPage.js";
import LoginPage from "views/pages/LoginPage.js";
import GuardedRoute from "views/sections/global/GuardedRoute";

function App() {
  const[isAutheticated, setisAutheticated] = useState(localStorage.getItem("isAutheticated"));

console.log(isAutheticated)
  console.log(localStorage.getItem("isAutheticated"))
  return (
  <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
        {/* <GuardedRoute path='/home' component={ Index } auth={isAutheticated} /> */}
      <Route
        path="/restaurant/:id"
        render={(props) => <RestaurantPage {...props} />}
      />

{/* <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      /> */}
      
       
      <Route
        path="/register-page"
        render={(props) => <LoginPage {...props} />}
      />

<Route
        path="/login"
        render={(props) => <Login {...props} />}
      />
      <Redirect to="/home" />
    </Switch>

  );
}

export default App;