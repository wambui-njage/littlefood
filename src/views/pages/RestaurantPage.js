import React , { useEffect ,useReducer}from "react";

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
import RestaurantDescription from "../sections/restaurant/RestaurantDescription";
import Error from "../sections/restaurant/Error.js";
import RestaurantContext from "../context/Restaurant";
import Loading from "../sections/global/Loading";
// const RestaurantContext = React.createContext({});


const reducer = (state,action) => {

  switch (action.type) {
    case "SUCCESS":

      return { 
        hotel:action.payload,
        error:'',
        loading : false
      }
      
    case "ERROR":

      return {
        hotel:{},
        error:'something went wrong',
        loading : false
      }
     
  
    default:
      return state;
     
  }

}


function RestaurantPage(props) {

  const intialState = {
    hotel:{},
    error:'',
    id:props.match.params.id,
    loading : true
  };

  const [state,dispatch] = useReducer(reducer,intialState)

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {


    const fetchHotel = async () => {

      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts/${state.id}`,
      ).then(result => {    

        dispatch({type:'SUCCESS',payload:result.data});
        
			})
			.catch(error => {

        dispatch({ type: 'ERROR' })
				
			})

     
  
    }
    fetchHotel()

    document.body.classList.add("landing-page");

    return function cleanup() {
    document.body.classList.remove("landing-page");
    };

  }, []);

  return (
    <>
      <Navbar/>
      <PageHeader/>
      <RestaurantContext.Provider value={state} >
      {state.loading && <Loading /> }
      <Error />
      
      {
       Object.keys(state.hotel).length > 0 && <Container >
          <RestaurantDescription />
          <Menu/>
        </Container>
      }
        </RestaurantContext.Provider>
      <Footer />
    </>
  );
}

export default RestaurantPage;
