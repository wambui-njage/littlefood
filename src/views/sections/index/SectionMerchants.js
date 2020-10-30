import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/fetch";
import axios from "axios";
import Loading from "../restaurant/Loading";
import Error from "../global/Error";
import ImageLoad from "../global/ImageLoad"
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
      url: "/api/restaurant"
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
              { Object.entries(restaurants).map((value, index) => { return  <Card key={restaurants[index].RestaurantID}>
                
                <ImageLoad
  
                  src={restaurants[index].Image}
                  placeholder={restaurants[index].Image}
                  alt="Decription"
                  className="card-img-top" 
                  />
                {/* <img width="100%" src="https://littleimages.blob.core.windows.net/fooddelivery/000686/000686" alt="Card image cap" loading="lazy" class="card-img-top" style="height: -webkit-fill-available;"> */}
                {/* <CardImg top width="100%" style={{height:"-webkit-fill-available"}} src={restaurants[index].Image} alt="Card image cap" loading="lazy" /> */}
                <CardBody>
                <CardTitle className="font-weight-bold text-secondary">{restaurants[index].RestaurantName}</CardTitle>
                  <CardText>0.8 KM Away</CardText>
                    {/* <CardText>{restaurants[index].RestaurantName}</CardText> */}
                    <Link className="btn btn-secondary" to={{pathname:`/restaurant/${restaurants[index].RestaurantID}` }} >
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
