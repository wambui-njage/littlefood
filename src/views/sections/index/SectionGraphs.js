import React,{ useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../../hooks/fetch";

import {
    Container,
    Card, 
    CardBody, 
    CardFooter
} from "reactstrap";
import Chart from "react-apexcharts";



function SectionGraphs() {

    let newreport = new Array(12).fill(0);
  
    const { response , error} = useFetch({
      api: axios,
      method: "get",
      url: "/api/reports"
   });

   const [graph , setGraph] = useState(
    {
          
      series: [{

        name: 'Comsuption',
        data: []

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
            
          }
        
        },
        title: {
          text: 'Monthly Comsuption (Ksh) This Year',
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

  useEffect(() =>{

  
    if (response) {

        newreport.map( (value,key) =>{

          if(response.findIndex(x => x.TrxDate === key) >= 0){

              newreport[key] = response[response.findIndex(x => x.TrxDate === key)].total

          }

      
      })

      setGraph({...graph, series : [
                {
                  name: 'Comsuption',
                  data: newreport
                }
              ]
          })

      }
  
  },[response])
  

    
return (
<>
  {!error && (<div id="graphs">
      <Container>
          <div className="title">
            <h2 className="text-center">Consumption Per Month </h2>
          </div>
 
          <Card class="ml-auto mr-auto">
            <CardBody>
              <div id="chart">
                <Chart
                      options={graph.options} series={graph.series} type="bar" height={350} 
                    />
                  
              </div>
            </CardBody>
          
          </Card>
       </Container>
  </div>)}
</>
  );
}

export default SectionGraphs;
