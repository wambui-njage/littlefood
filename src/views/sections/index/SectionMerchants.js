import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/fetch";
import axios from "axios";
import Loading from "../restaurant/Loading";
import Error from "../restaurant/Error.js";
import { CSSTransition } from 'react-transition-group';
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
  
    const { response, isLoading , error} = useFetch({
      api: axios,
      method: "get",
      url: "http://localhost:5000/restaurant"
   });

//  console.log(response, isLoading , error)
  useEffect(() =>{

  
    if (response) {

      setRestaurants(response)
    }
 
    
    
  },[response])

  return (
    <>
    
    <CSSTransition
            in={!isLoading}
            appear={true}
            timeout={1000}
            classNames="fade"
            >
    {  <div id="hotels">
        <Container>
          <div className="title">
            <h2 className="text-center">Resturants Near You </h2>
          </div>
          { isLoading &&  <Loading/> }
          <CardDeck>

              { error && <Error error={error} /> }
              { Object.entries(restaurants).map((value, index) => { return  <Card key={value[1].RestaurantID}>
                
                <CardImg top width="100%" style={{height:"-webkit-fill-available"}} src={value[1].Image} alt="Card image cap" loading="lazy" />
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
    
}
</CSSTransition>
    </>
  );
}

export default React.memo( SectionMerchants );
