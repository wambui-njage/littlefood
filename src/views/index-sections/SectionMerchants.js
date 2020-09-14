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
import { Link,Route } from "react-router-dom";

import ProfilePage from "../examples/ProfilePage";
// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
    Container,
    Card, 
    Button,
    CardImg, 
    CardTitle, 
    CardText,
    CardDeck,
    CardSubtitle, 
    CardBody
} from "reactstrap";

function SectionMerchants() {

  return (
    <>
      <div id="hotels">
        <Container>
          <div className="title">
            <h2 className="text-center">Resturants Near You </h2>
          </div>
          <CardDeck>
          <Card>
        <CardImg top width="100%" src={require("assets/img/java.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle><b>Java House</b></CardTitle>
          <CardSubtitle>0.8 KM Away</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button >View Menu</Button>
        </CardBody>
      </Card>
    
      <Card>
        <CardImg top width="100%" src={require("assets/img/artcaffe.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle><b>ArtCaffe</b></CardTitle>
          <CardSubtitle>2.4 KM Away</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Link className="btn btn-secondary" to={{pathname:"/profile-page" , hotel:{name:"Java House",description:"Coffe House"}}} >
                 View Menu
            </Link>
            <Route exact path='profile-page' component={ProfilePage}/>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={require("assets/img/cjs.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle><b>CJs</b></CardTitle>
          <CardSubtitle>2.8 KM Away</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>View Menu</Button>
        </CardBody>
      </Card>
    </CardDeck>
    
       
        </Container>
      </div>
    </>
  );
}

export default SectionMerchants;
