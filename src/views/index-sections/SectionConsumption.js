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
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Table,
  Progress 
} from "reactstrap";

function SectionConsumption() {

  return (
    <>
      <div className="section">
        <Container>
          <div className="title">
            <h2 className="text-center">Comsuption Per User </h2>
          </div>
          
    
          <Table borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Consumption</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Larry</td>
          <td>Page</td>
          <td>
          <Progress value={50} max="135" />
         <div className="text-center">75 of 111</div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Nova</td>
          <td>Taylor</td>
          <td>
          <Progress value={50} max="135" />
         <div className="text-center">75 of 111</div>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Jay</td>
          <td>Paters</td>
          <td>
          <Progress value={50} max="135" />
         <div className="text-center">75 of 111</div>
          </td>
        </tr>
        
      </tbody>
    </Table>
          
         
        </Container>
      </div>
    </>
  );
}

export default SectionConsumption;
