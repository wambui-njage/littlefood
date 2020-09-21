import React from "react";
import Shimmer from 'react-js-loading-shimmer';
import {
     Container
  } from "reactstrap";
  
const Loading = () => {
    return ( 
    <>

<Container className="col-6">

<div className="mb-5">

        <h4><Shimmer height={"25px"}/></h4>
        <h4><Shimmer height={"25px"}/></h4>
       
</div>

<div>
  <div className={"row mb-4"}>
    <div className={"col-sm-4 loading"}>
    <Shimmer />
    
    </div>
      <div className={"col-sm-4"}>
        <Shimmer height={"25px"}/>
        <Shimmer height={"25px"}/>
      </div>

      <div className={"col-sm-4"}>
        <Shimmer height={"25px"}/>
        <Shimmer height={"25px"}/>
      </div>
    </div>
    <hr/>

    <div className={"row mb-4"}>
    <div className={"col-sm-4 loading"}>
    <Shimmer />
    
    </div>
      <div className={"col-sm-4"}>
        <Shimmer height={"25px"}/>
        <Shimmer height={"25px"}/>
      </div>

      <div className={"col-sm-4"}>
        <Shimmer height={"25px"}/>
        <Shimmer height={"25px"}/>
      </div>
    </div>
    <hr/>

    <div className={"row mb-4"}>
    <div className={"col-sm-4 loading"}>
    <Shimmer />
    
    </div>
      <div className={"col-sm-4"}>
        <Shimmer height={"25px"}/>
        <Shimmer height={"25px"}/>
      </div>

      <div className={"col-sm-4"}>
        <Shimmer height={"25px"}/>
        <Shimmer height={"25px"}/>
      </div>
    </div>
</div>
</Container>
    {/* <div className="text-center" >
    <img  width="300" height="250" alt="Loading..." src={require("assets/img/loading.gif")} />
    <br/>
    <p className="font-weight-bold">LOADING AWESOME STUFF ...</p>
     
    </div> */}
    </> );
}
 
export default Loading;