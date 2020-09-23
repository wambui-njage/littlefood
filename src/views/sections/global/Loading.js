import React from "react";
import Shimmer from 'react-js-loading-shimmer';
import _ from "lodash"
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

{ _.times(4, (i) => { return   <div key={i} className={"row mb-4"}>
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
      <hr/>
    </div>
  
  })}


</Container>
  
    </> );
}
 
export default Loading;