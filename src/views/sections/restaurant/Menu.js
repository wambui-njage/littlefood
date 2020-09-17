
import React ,{ useState , useContext}from "react";
import RestaurantContext from "../../context/Restaurant"
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

const Menu = () => {

  const hotel = useContext(RestaurantContext)

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
return (   <>
     <div className="nav-tabs-navigation">
    <div className="nav-tabs-wrapper">
      <Nav role="tablist" tabs>
        <NavItem>
          <NavLink 
            className={activeTab === "1" ? "active pointer" : "pointer"}
            onClick={() => {
              toggle("1");
            }}
          >
            Starters
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active pointer" : "pointer"}
            onClick={() => {
              toggle("2");
            }}
          >
            Main Course
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
  {/* Tab panes */}
  <TabContent className="following" activeTab={activeTab}>
    <TabPane className="text-center" tabId="1" id="follows">
      <Row>
        <Col className="ml-auto mr-auto" md="6">
          <ul className="list-unstyled follows">
            <li>
              <Row>
                <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/artcaffe.jpg")}
                  />
                </Col>
                <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                  <h6>
                    Grill Fish Fillet <br />
                    <small>Served with salad or french fries</small>
                  </h6>
                </Col>
                <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">

                <h6>
                    KSH 1200
                </h6>
                  
                </Col>
              </Row>
            </li>
            <hr />
           
          </ul>
        </Col>
      </Row>
    </TabPane>
  <TabPane className="text-center" tabId="2" id="following">
      <Row>
        <Col className="ml-auto mr-auto" md="6">
          <ul className="list-unstyled follows">
            <li>
              <Row>
                <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/artcaffe.jpg")}
                  />
                </Col>
                <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                  <h6>
                    Grill Fish Fillet <br />
                    <small>Served with salad or french fries</small>
                  </h6>
                </Col>
                <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">

                <h6>
                    KSH 1200
                  </h6>
                  
                </Col>
              </Row>
            </li>
            <hr />
           
          </ul>
        </Col>
      </Row>
    </TabPane>
  </TabContent>
  </>);
}
 
export default Menu;