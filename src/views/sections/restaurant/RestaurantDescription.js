import React ,{ useContext }from "react";
import RestaurantContext from "../../context/Restaurant";
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

const RestaurantDescription = () => {

  const  { hotel } = useContext(RestaurantContext);
   
    return ( <>

      <div className="owner">
            
            <div className="name">
              <h4 className="title font-weight-bold text-muted">
             {hotel.RestaurantName}<br />
              </h4>
              <p >Here is the wonderful menu { hotel.RestaurantName.toLocaleLowerCase() } have crafted for you </p>
            </div>
            <Row>
            {/* <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Here is the wonderful menu {hotel.RestaurantName} has crafted just for you 
              </p>
              <br />
            
            </Col> */}
          </Row>
          <br />
          </div>
    
    </> );
}
 
export default RestaurantDescription;