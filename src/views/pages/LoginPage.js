import React from "react";
import Sparkle from 'react-sparkle'
import { useForm } from "react-hook-form";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";



function LoginPage() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
 
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
             
                <Form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                  <label>Email</label>
                  <input placeholder="Email" name="email" defaultValue="1" key="key1" id="email" type="text" className="form-control" ref={register({name: 'email' })} />
                  {/* <Input placeholder="Email" name="email" type="text"  ref={register({name: 'email' })} /> */}
                  <label>Password</label>
                  <Input placeholder="Password" name="password" id="password" type="password" ref={register({ name: 'password'})}  />
                  <Button type="submit" block className="btn-round" color="danger">
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
