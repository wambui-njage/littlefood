import React from "react";
import Sparkle from 'react-sparkle'

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";


function LoginPage() {
  
 
  return (
    <>
     
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container >
          <Row>
            <Col className="ml-auto mr-auto col" >
              <Card className="card-register ml-auto mr-auto" style={{backgroundColor : "#FF8F63" ,margin:"0px"}} >
                <h3 className="title mx-auto">Welcome</h3>
             
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    <div style={{ position: 'relative' }}>
                      <Sparkle
                      count={5}
                      fadeOutSpeed={50}
                      flickerSpeed={'slowest'}
                      newSparkleOnFadeOut={true}
                      
                      />
                    </div>
                    UNLOCK GOODNESS
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?

                    
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      
      </div>
    </>
  );
}

export default LoginPage;
