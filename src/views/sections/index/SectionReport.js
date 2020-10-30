import React,{ useEffect, useState } from "react";
import axios from "axios";
import {
    Container,
    Card, 
    CardBody,
    Button,
    FormGroup,
    Form,
    Row,
    Col,
    Label,
    CardImg, CardFooter
} from "reactstrap";
import { useForm } from "react-hook-form";



function SectionReport() {
    const [error , setError] = useState("")
    const [loading , setLoading] = useState(false)
    const { register, handleSubmit , getValues, errors } = useForm();

 
    const onSubmit =  () => {
     
      setLoading(true)

      axios({
        url: '/api/reports/food', //your url
        method: 'POST',
        responseType: 'blob', // important
        body: JSON.stringify(getValues()),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'report.xlsx'); //or any other extension
        document.body.appendChild(link);
        link.click();
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setError(err.response.statusText)
      })
  } 

  return (
    <>
        <Container>
          <div className="title">
            <h2 className="text-center">Consumption Per Month </h2>
          </div>
          <Card  className="col">
            
            <CardBody>
           

            <Form onSubmit={handleSubmit(onSubmit)} >
                <Row form>

                <Col md={3} className="mt-auto mb-auto text-center">
                  
                  <FormGroup className="mt-auto mb-auto">
                  
                  <CardImg width="50%"  height="50%" src={require("assets/img/report.png")} alt="Card image cap" />
                  </FormGroup>
                  </Col>

                  <Col md={3} className="mt-auto mb-auto ">
                    <FormGroup>
                      <Label for="exampleEmail">From Date</Label>
                    
                      <input className="form-control" type="date" name="from"  ref={register( { required: true})} required />
                    </FormGroup>
                  </Col>

                  <Col md={3} className="mt-auto mb-auto ">
                    <FormGroup>
                      <Label for="examplePassword">To Date</Label>
                      <input className="form-control" type="date" name="to" id="to"  ref={register({
                          required: true,
                          validate: () => new Date(getValues("to")) >= new Date(getValues("from"))
                        })} required  />
                    </FormGroup>
                  </Col>

                  <Col md={3} className="mt-auto mb-auto text-center">

                  
                  
                  <FormGroup className="mt-auto mb-auto">
                  
                    <Button disabled={loading} className="btn-round" color="info" outline type="submit">
                      Download
                      <i className="fa fa-download" />
                    </Button>
                  </FormGroup>
                  </Col>

                  </Row>
              </Form>

              <CardFooter>
              {errors.to && errors.to.type === "validate" && (
                  <div className="text-danger text-center font-weight-normal">
                    TO DATE MUST GREATER THAN FROM DATE
                  </div>
                )}

                 { error && <div className="text-danger text-center font-weight-normal">
                    {error}
                  </div> }


      
              </CardFooter>
           
           
            </CardBody>
          </Card> 
      </Container>

    </>
  );
}

export default SectionReport;
