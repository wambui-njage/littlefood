
import React,{ useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../../hooks/fetch";
import Loading from "../restaurant/Loading";
import Error from "../global/Error.js";
import {
    Container,
    Card, 
    CardDeck,
    CardBody,
    Button,
    Input,
    FormGroup,
    Form,
    Row,
    Col,
    Label,
    CardImg, CardFooter
} from "reactstrap";
import Chart from "react-apexcharts";
import { useForm } from "react-hook-form";


function SectionGraphs() {
  const [error , setError] = useState("")
  const { register, handleSubmit , getValues, errors } = useForm(); 


 
    const onSubmit =  () => {
     
    
      fetch('http://localhost:5000/reports/food', {
      method: 'post',
      body: JSON.stringify(getValues()),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.blob())
      .then((blob) => {

        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'report.xlsx');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
       
      })
      .catch(setError("Well this is awkward"))
  }




    const [gragh , setGraph] = useState(
        {
                
              series: [{
                name: 'Inflation',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
              }],
              options: {
                chart: {
                  height: 350,
                  type: 'bar',
                },
                plotOptions: {
                  bar: {
                    dataLabels: {
                      position: 'top', // top, center, bottom
                    },
                  }
                },
                dataLabels: {
                  enabled: true,
                  formatter: function (val) {
                    return val + "%";
                  },
                  offsetY: -20,
                  style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                  }
                },
                
                xaxis: {
                  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  position: 'top',
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  },
                  crosshairs: {
                    fill: {
                      type: 'gradient',
                      gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                      }
                    }
                  },
                  tooltip: {
                    enabled: true,
                  }
                },
                yaxis: {
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false,
                  },
                  labels: {
                    show: false,
                    formatter: function (val) {
                      return val + "%";
                    }
                  }
                
                },
                title: {
                  text: 'Monthly Food Consumption',
                  floating: true,
                  offsetY: 330,
                  align: 'center',
                  style: {
                    color: '#444'
                  }
                }
              },
            
            
            
          }
      ); 

  return (
    <>
      <div id="graghs">
        <Container>
          <div className="title">
            <h2 className="text-center">Consumption Per Month </h2>
          </div>
          <Card  className="col">
            
            <CardBody>
            { error && <Error error={error} /> }

            { !error && <Form onSubmit={handleSubmit(onSubmit)} >
                <Row form>

                <Col md={3} className="mt-auto mb-auto text-center">
                  
                  <FormGroup className="mt-auto mb-auto">
                  
                  <CardImg width="50%"  height="50%" src={require("assets/img/report.png")} alt="Card image cap" />
                  </FormGroup>
                  </Col>

                  <Col md={3} className="mt-auto mb-auto ">
                    <FormGroup>
                      <Label for="exampleEmail">From Date</Label>
                    
                      <input className="form-control" type="date" name="fromdate"  ref={register( { required: true})} required />
                    </FormGroup>
                  </Col>

                  <Col md={3} className="mt-auto mb-auto ">
                    <FormGroup>
                      <Label for="examplePassword">To Date</Label>
                      <input className="form-control" type="date" name="todate" id="todate"  ref={register({
                          required: true,
                          validate: () => new Date(getValues("todate")) >= new Date(getValues("fromdate"))
                        })} required  />
                    </FormGroup>
                  </Col>

                  <Col md={3} className="mt-auto mb-auto text-center">

                  
                  
                  <FormGroup className="mt-auto mb-auto">
                  
                    <Button className="btn-round" color="info" outline type="submit">
                      Download
                      <i className="fa fa-download" />
                    </Button>
                  </FormGroup>
                  </Col>

                  </Row>
              </Form> }

              <CardFooter>
              {errors.todate && errors.todate.type === "validate" && (
                  <div className="text-danger text-center font-weight-normal">
                    TO DATE MUST GREATER THAN FROM DATE
                  </div>
                )}

      
              </CardFooter>
           
           
            </CardBody>
          </Card> 

        <CardDeck>
      <Card>
     
        <CardBody>
        <div id="chart">
        <Chart
               options={gragh.options} series={gragh.series} type="bar" height={350} 
            />
            
        </div>
        </CardBody>
      </Card>

      <Card>
     
        <CardBody>
        <div id="chart">
        <Chart
               options={gragh.options} series={gragh.series} type="bar" height={350} 
            />
            
       
        </div>
        </CardBody>
      </Card>
  
      </CardDeck>
    
       
</Container>
      </div>
    </>
  );
}

export default SectionGraphs;
