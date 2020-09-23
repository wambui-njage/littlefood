import React ,{ useContext }from "react";
// import RestaurantContext from "../../context/Restaurant";

// reactstrap components
import {
    Container
} from "reactstrap";
const Error = (props) => {
  const { error } = props
 
    return ( <>
    
    <Container >
          <div className="owner">
            
            <div className="name">
              <h4 className="title mt-2"> { error.length ? error : "Error 404 Resturant Not Found"}
             <br />
              </h4>
             
         
              <img
                alt="..." width="200px" height="190px"
                className="mb-4 img-circle img-no-padding img-responsive"
                src={require("assets/img/avocado.gif")}
              />

               <h6 className="description">NOTHING TO SEE HERE <span role="img" aria-label="sheep">👀</span> ... KEEP WALKING </h6>
        
            </div>
          </div>
      </Container>
    </> );
}
 
export default Error;