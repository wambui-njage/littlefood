import React from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

const HotelDescription = (props) => {

    console.log(props)
    return ( <>

<div className="owner">
            
            <div className="name">
              <h4 className="title">
             Java House<br />
              </h4>
              <h6 className="description">Coffee House</h6>
            </div>
            <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Java House is a chain of coffee houses with its head office at ABC Place in Nairobi, Kenya, founded in 1999 by Kevin Ashley and Jon Wagner.
              </p>
              <br />
            
            </Col>
          </Row>
          <br />
          </div>
    
    </> );
}
 
export default HotelDescription;