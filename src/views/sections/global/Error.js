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
              <h4 className="title mt-2"> { error.length ? error : "Error 404 Resturant Not Found"}  <span role="img" aria-label="sheep">🤔</span> 
             <br />
              </h4>
             
              
              <img
                alt="..." width="350px" height="350px"
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/404.png")}
              />

               {/* <h6 className="description">NOTHING TO SEE HERE <span role="img" aria-label="sheep">👀</span> ... KEEP WALKING </h6> */}
        
            </div>
          </div>
      </Container>
    </> );
}
 
export default Error;