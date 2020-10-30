import React from "react";
import Shimmer from 'react-js-loading-shimmer';
import _ from "lodash"
import {
     Container
  } from "reactstrap";
  
const ConsumptionLoading = () => {
    return ( 
    <>

        <Container className="col-6">

            <table>
                <tbody>
                { _.times(4, (i) => { return       <tr>
                            <td>{i+1}</td>
                            <td> <Shimmer height={"25px"}/></td>
                            <td> <Shimmer height={"25px"}/></td>
                            <td> <Shimmer height={"25px"}/></td>
                        </tr>
                
                })}
                </tbody>
            </table>


        </Container>
  
    </> );
}
 
export default ConsumptionLoading;