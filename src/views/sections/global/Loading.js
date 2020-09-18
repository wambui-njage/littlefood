import React from "react";
  
const Loading = () => {
    return ( 
    <>
    <div className="text-center" >
    <img  width="300" height="250" alt="Loading..." src={require("assets/img/loading.gif")} />
    <br/>
    <p className="font-weight-bold">LOADING AWESOME STUFF ...</p>
     
    </div>
    </> );
}
 
export default Loading;