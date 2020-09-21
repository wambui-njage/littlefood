import React, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/fetch";
import axios from "axios";
// reactstrap compnents
import {
    Container,
    Card, 
    CardImg, 
    CardTitle, 
    CardText,
    CardDeck, 
    CardBody
} from "reactstrap";


function SectionMerchants() {

  const [restaurants ,setRestaurants] = useState([]);

  
  const { response, isLoading } = useFetch({
    api: axios,
    method: "get",
    url: "http://localhost:5000/restaurant"
 });


  useEffect(() =>{

    if (response) {

      setRestaurants(response)
    }
 
    
    
  },[response])

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
