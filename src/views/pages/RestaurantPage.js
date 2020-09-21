import React , { useEffect ,useReducer}from "react";

import axios from 'axios';
// reactstrap components
// core components
import Navbar from "layouts/Navbars/Navbar.js";
import PageHeader from "layouts/Headers/PageHeader.js";
import Footer from "layouts/Footers/Footer.js";
import Menu from "../sections/restaurant/Menu.js";
import RestaurantDescription from "../sections/restaurant/RestaurantDescription";
import Error from "../sections/restaurant/Error.js";
import RestaurantContext from "../context/Restaurant";
import Loading from "../sections/global/Loading";
import { CSSTransition } from 'react-transition-group';
import "../../assets/css/style.css";
import Shimmer from 'react-js-loading-shimmer';
import {
  
  Row,
  Container
} from "reactstrap";

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
        `http://localhost:5000/restaurant/${state.id}`,
      ).then(result => { 
        
        setTimeout(() => { dispatch({type:'SUCCESS',payload:result.data}); }, 1000);

     
        
			})
			.catch(error => {

        setTimeout(() => { dispatch({ type: 'ERROR' }); }, 3000);

        
				
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
      { state.loading &&  <Container className="col-6">

          <div className="mb-5">

                  <h4><Shimmer height={"25px"}/></h4>
                  <h4><Shimmer height={"25px"}/></h4>
                 
          </div>
         
          <div>
            <div className={"row mb-4"}>
              <div className={"col-sm-4 loading"}>
              <Shimmer />
              
              </div>
                <div className={"col-sm-4"}>
                  <Shimmer height={"25px"}/>
                  <Shimmer height={"25px"}/>
                </div>

                <div className={"col-sm-4"}>
                  <Shimmer height={"25px"}/>
                  <Shimmer height={"25px"}/>
                </div>
              </div>
              <hr/>

              <div className={"row mb-4"}>
              <div className={"col-sm-4 loading"}>
              <Shimmer />
              
              </div>
                <div className={"col-sm-4"}>
                  <Shimmer height={"25px"}/>
                  <Shimmer height={"25px"}/>
                </div>

                <div className={"col-sm-4"}>
                  <Shimmer height={"25px"}/>
                  <Shimmer height={"25px"}/>
                </div>
              </div>
              <hr/>

              <div className={"row mb-4"}>
              <div className={"col-sm-4 loading"}>
              <Shimmer />
              
              </div>
                <div className={"col-sm-4"}>
                  <Shimmer height={"25px"}/>
                  <Shimmer height={"25px"}/>
                </div>

                <div className={"col-sm-4"}>
                  <Shimmer height={"25px"}/>
                  <Shimmer height={"25px"}/>
                </div>
              </div>
          </div>
      </Container> }
      {state.error && <Error /> }
      
      {
       Object.keys(state.hotel).length > 0 && <Container >
         
          <RestaurantDescription  />

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
