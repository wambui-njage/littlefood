import React ,{ useState } from "react";
import Sparkle from 'react-sparkle'
import { useForm } from "react-hook-form";
// reactstrap components
import { Button, Card, Form, Container, Row, Col ,Badge } from "reactstrap";



function LoginPage(props) {

  const { register, handleSubmit, errors  } = useForm();
  const [error , setError] = useState("");
  const onSubmit = (data) => {
    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if(response.status === 200){
              localStorage.setItem('isAutheticated', true);
              props.history.push('/home');  
          }else if(response.status === 400){
             localStorage.setItem('isAutheticated', false);
             console.log("SOMETHING WENT WRONG")
             setError("server","no quite maam")
          }
        
      })
      
      .catch(err => {
      
        console.log(err)
      })
  };
 
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
             {error && <Badge color="danger"><b className="text-center"> <span  role="img">⚠️</span>DAMN ! IS THIS REALLY YOU <span  role="img">⚠️</span></b></Badge>}
                <Form className="register-form" onSubmit={handleSubmit(onSubmit)}>

                 
                  <label>Email</label>
                  <input placeholder="Email" name="email" key="key1" id="email" type="text" className="form-control"  ref={register({ required: true })} />
                  {errors.email && <span>We kinda sorta require your email</span>}
                  <label>Password</label>
                  <input className="form-control" placeholder="Password" name="password" id="password" type="password" ref={register({ required: true })}  />
                  {errors.password && <span>I mean a password would be great</span>}
                  <Button type="submit" block className="btn-round" color="danger">
                    <div style={{ position: 'relative' }}>
                      <Sparkle
                      count={3}
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
