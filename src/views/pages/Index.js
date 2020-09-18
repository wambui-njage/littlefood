import React , { useEffect,useReducer } from "react";
import axios from "axios"
// reactstrap components

// core components
import IndexNavbar from "layouts/Navbars/IndexNavbar.js";
import IndexHeader from "layouts/Headers/IndexHeader.js";
import Footer from "layouts/Footers/Footer.js";

// index sections
import SectionConsumption from "views/sections/index/SectionConsumption.js";
import SectionMerchants from "views/sections/index/SectionMerchants.js";
import SectionGraphs from "views/sections/index/SectionGraphs";

const reducer = (state,action) => {

  switch (action.type) {
    case "SUCCESS":

      return { 
        restaurants:action.payload
       
      }
      
    case "ERROR":

      return {
        restaurants:{}
      }
     
  
    default:
      return state;
     
  }

}


function Index() {


  document.documentElement.classList.remove("nav-open");

  const intialState={

    restaurants:{}
    
  }

  const [state,dispatch] = useReducer(reducer,intialState)

  
  useEffect(() => {

    const fetchHotel = async () => {

      await axios.get(
        'http://localhost:5000/restaurant',
      ).then(result => {    

        dispatch({type:'SUCCESS',payload:result.data});
        
			})
			.catch(error => {

        dispatch({ type: 'ERROR' })
				
			})

     
  
    }
    fetchHotel()
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, [] );
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionGraphs />
        <SectionConsumption />
        <SectionMerchants restaurants = {state.restaurants}/>
        <Footer />
      </div>
    </>
  );
}

export default Index;
