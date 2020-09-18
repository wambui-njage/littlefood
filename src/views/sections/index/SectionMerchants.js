import React, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
// reactstrap compnents
import {
    Container,
    Card, 
    CardImg, 
    CardTitle, 
    CardText,
    CardDeck,
    CardSubtitle, 
    CardBody
} from "reactstrap";


function SectionMerchants(props) {

  const [restaurants ,setRestaurants] = useState([]);

  useEffect(() =>{
 
    setRestaurants(props.restaurants)
    
  },[props])

  return (
    <>
      <div id="hotels">
        <Container>
          <div className="title">
            <h2 className="text-center">Resturants Near You </h2>
          </div>
          <CardDeck>

          
              { Object.entries(restaurants).map((value, index) => { return  <Card key={value[1].RestaurantID}>
                
                <CardImg top width="100%" style={{height:"-webkit-fill-available"}} src={value[1].Image} alt="Card image cap" />
                <CardBody>
                <CardTitle className="font-weight-bold text-secondary">{value[1].RestaurantName.toUpperCase()}</CardTitle>
                  <CardText>0.8 KM Away</CardText>
                    {/* <CardText>{value[1].RestaurantName}</CardText> */}
                    <Link className="btn btn-secondary" to={{pathname:`/restaurant/${value[1].RestaurantID}` }} >
                        View Menu
                    </Link>
                </CardBody>
              </Card>
              })}
                  
          
          </CardDeck>
  
        </Container>
      </div>
    </>
  );
}

export default SectionMerchants;
