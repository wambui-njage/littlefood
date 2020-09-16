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
import React,{ useState } from "react";
// react plugin used to create switch buttons


// reactstrap components
import {
    Container,
    Card, 
    CardDeck,
    CardBody
} from "reactstrap";
import Chart from "react-apexcharts";


function SectionGraphs() {

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
