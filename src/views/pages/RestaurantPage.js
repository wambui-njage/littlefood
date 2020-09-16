import React , { useState, useEffect }from "react";
import axios from 'axios';
// reactstrap components
import {
 
  Container,

} from "reactstrap";

// core components
import Navbar from "layouts/Navbars/Navbar.js";
import PageHeader from "layouts/Headers/PageHeader.js";
import Footer from "layouts/Footers/Footer.js";
import Menu from "../sections/restaurant/Menu.js";
import HotelDescription from "../sections/restaurant/HotelDescription.js";
import Error from "../sections/restaurant/Error.js";



function RestaurantPage(props) {

  const [hotel , setHotel] = useState({})
  

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {

    
    const fetchHotel = async () => {
      //props.match.params.id
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
   
      setHotel(result.data);
  
    }
    
    fetchHotel()

    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  },[]);
  return (
    <>
      <Navbar/>
      <PageHeader/>
      <Error hotel={hotel}/>
        <Container style={hotel ? {} : { display: 'none' }}>
          <HotelDescription hotel={hotel}/>
          <Menu/>
        </Container>
      <Footer />
    </>
  );
}

export default RestaurantPage;
