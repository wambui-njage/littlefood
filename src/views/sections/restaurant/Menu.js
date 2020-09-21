import React ,{ useState , useContext, useEffect , useReducer}from "react";
import RestaurantContext from "../../context/Restaurant"
import axios from "axios"
import _ from "lodash"
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Container
} from "reactstrap";



const reducer = (state,action) => {

  switch (action.type) {
    case "SUCCESS":

      return { 
        menu:_.groupBy(action.payload, function(item) { return Math.round(parseFloat(item.OriginalPrice) / 1000) * 1000; }),
        error:''
      }
      
    case "ERROR":

      return {
        hotel:{},
        error:'something went wrong'
      }
     
  
    default:
      return state;
     
  }

}

const intialState = {
  menu:{},
  error:''
};

function Menu(){

  const addDefaultSrc = (ev) => {
      ev.target.src = require("assets/img/defaultfood.png")
    }

  const [state , dispatch] = useReducer(reducer,intialState)

  const { hotel } = useContext(RestaurantContext);

  const [activeTab, setActiveTab] = useState("0");

  

  useEffect( () => {

    const fetchMenu = async () => {

      await axios.get(
        `http://localhost:5000/restaurant/menu/${hotel.RestaurantID}`,
      ).then(result => {    

        dispatch({type:'SUCCESS',payload:result.data});
        
			})
			.catch(error => {

        dispatch({ type: 'ERROR' })
				
			})

     
  
    }

    fetchMenu()
 
  }, [hotel])
 
  
  const toggle = (tab) => {

    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };


  return (   

    <>
  <Container>

    <div className="nav-tabs-navigation">
      <div className="nav-tabs-wrapper">
        <Nav role="tablist" tabs>

        { Object.keys(state.menu).map((index) => {  return  <NavItem key={index}>
                <NavLink 
                  className={activeTab === index.charAt(0) ? "active pointer" : "pointer"}
                  onClick={() => {
                    toggle(index.charAt(0));
                  }}
                >
              

                  KSH { parseFloat(index) === 0 ? 1 : parseFloat(index) } to KSH {parseFloat(index) === 0 ? 999 : parseFloat(index)+1000}
                </NavLink>
          </NavItem>
                })}
        
        </Nav>
      </div>
    </div>
    {/* Tab panes */}
    <TabContent className="following" activeTab={activeTab}>

    { Object.entries(state.menu).map((value,index) => { return  <TabPane className="text-center" tabId={index.toString()} id={index.toString()} key={index} >
        
        { value[1].map((item) => { return  <Row  key={item.MenuID}>
              <Col className="ml-auto mr-auto" md="8">
                <ul className="list-unstyled follows">
                  <li>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                        <img
                          alt="..."
                          
                          className="img-circle img-no-padding img-responsive"
                          src={item.FoodImage} 
                          onError={addDefaultSrc}
                        />
                      </Col>
                      <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                        <h6>
                        { item.FoodName } <br />
                          <small>{ item.FoodDescription }</small>
                        </h6>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">

                      <h6>
                          KSH {item.OriginalPrice}
                      </h6>
                        
                      </Col>
                    </Row>
                  </li>
                  <hr />
                
                </ul>
              </Col>
            </Row>
          })}

      </TabPane>

    })}
      
    
    </TabContent>
    </Container>

      
    </>
  );
}
 
export default Menu;