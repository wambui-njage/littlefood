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
/*eslint-disable*/
import React from "react";
import DeviceEmulator from 'react-device-emulator';
// reactstrap components
import { Container } from "reactstrap";
import 'react-device-emulator/lib/styles/style.css';
// core components

function IndexHeader() {
  return (
    <>
    
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>

          {/* <div class="smartphone">
  <div class="content">
    <iframe src={require("assets/img/demo.mp4")}   />
  </div>
</div> */}


            
          
            <div className="title-brand">
              <div className="row">
              
              <div className="iframe col-5" style={{
          backgroundImage:
            "url(" + require("assets/img/phone.png") + ")",
        }}>
          <video className="sample-phone-img sample-phone-img-simple ml-1" src={require("assets/img/demo.mp4")} autoPlay= {true} loop={true} playsInline="" muted= {true}> </video>
{/* <iframe  frameborder="0"></iframe> */}
</div>
<h3 className="presentation-title col mt-auto mb-auto">Little Food</h3>

              </div>
           
              

        
            </div>
            {/* <h2 className="presentation-subtitle text-center">
            Loosen up a little.
            </h2> */}
          </Container>
        </div>
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        /> */}
        
      </div>
    </>
  );
}

export default IndexHeader;
