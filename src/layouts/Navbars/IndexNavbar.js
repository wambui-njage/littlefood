import React  from "react";
import { Link  , useHistory } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "reactstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
function IndexNavbar() {
  const history = useHistory();
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [openMenu,setOpenMenu] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  function handleClick(){
    fetch('/api/login', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if(response.status === 200){
          history.push("/login");
            }else if(response.status === 400){
                console.log("SOMETHING WENT WRONG")
                
            }
        
      })
      
      .catch(err => {
      
        console.log(err)
      })
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/home"
          >
          Little Food
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

             
            
            {/* <NavItem>
              <AnchorLink offset='100' className="nav-link" href='#graghs'>graghs</AnchorLink>
            </NavItem> */}

            <NavItem>
              <AnchorLink offset='100' className="nav-link" href='#hotels'>resturants</AnchorLink>
            </NavItem>

            <NavItem>

              <NavLink className="pointer" href ='/staff' >
                    STAFF
              </NavLink>
            </NavItem>

         
            <NavItem>
              <NavLink className="pointer"  onClick={handleClick} >
                  Logout
              </NavLink>
            </NavItem>
            
            {/* <UncontrolledDropdown nav inNavbar>


              <Dropdown isOpen={openMenu} 
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}>
              <DropdownToggle nav caret >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                <AnchorLink  offset='100' href='#graghs'>Graghs</AnchorLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
              </Dropdown>
            </UncontrolledDropdown> */}

            
           
          
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
