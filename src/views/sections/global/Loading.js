import React from "react";
import {
 
    Spinner,
  
  } from "reactstrap";

  
const Loading = () => {
    return ( 
    <>
    <div className="text-center" >
    <img  width="300" height="250" alt="Loading..." src={require("assets/img/loading.gif")} />
    <br/>
    <p className="font-weight-bold">LOADING AWESOME STUFF ...</p>
      {/* <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="dark" /> */}
    </div>
    </> );
}
 
export default Loading;