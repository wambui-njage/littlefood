import React , { useEffect ,useReducer }from "react";
import axios from 'axios';
import Navbar from "layouts/Navbars/Navbar.js";
import PageHeader from "layouts/Headers/PageHeader.js";
import Footer from "layouts/Footers/Footer.js";
import Menu from "../sections/restaurant/Menu.js";
import RestaurantDescription from "../sections/restaurant/RestaurantDescription";
import Error from "../sections/global/Error.js";
import RestaurantContext from "../context/Restaurant";
import Loading from "../sections/global/Loading";
import { CSSTransition } from 'react-transition-group';
import "../../assets/css/style.css";
import {  Container } from "reactstrap";
import useFetch from "../../hooks/fetch";


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
    error:null,
    id:props.match.params.id,
    loading : true
  };

  const [state,dispatch] = useReducer(reducer,intialState)

  document.documentElement.classList.remove("nav-open");

  const { response, error } = useFetch({
    api: axios,
    method: "get",
    url: `/api/restaurant/${intialState.id}`
 });

  useEffect(() => {

    if(response){

      setTimeout(() => { dispatch({type:'SUCCESS',payload:response}); }, 1000);

    }

    if(error){

      setTimeout(() => { dispatch({ type: 'ERROR' }); }, 3000);

    }
        
    document.body.classList.add("landing-page");

    return function cleanup() {
    document.body.classList.remove("landing-page");
    };

  }, [response]);

  return (
    <>
      <Navbar/>
      <PageHeader/>
      <RestaurantContext.Provider value={state} >
      { state.loading && !error &&  <Loading/> }
      { error && <Error error = {error} /> }
      
      {
       Object.keys(state.hotel).length > 0 && <Container >

         <CSSTransition
            in={!state.loading}
            appear={true}
            timeout={1000}
            classNames="fade"
            >
              <RestaurantDescription />
          </CSSTransition>

          <CSSTransition
            in={!state.loading}
            appear={true}
            timeout={1000}
            classNames="fade"
            >
                <Menu/>

          </CSSTransition>

        </Container>
      }
        </RestaurantContext.Provider>
      <Footer />
    </>
  );
}

export default RestaurantPage;
