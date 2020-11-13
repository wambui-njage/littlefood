import React , { useEffect ,useState }from "react";
import axios from 'axios';
import Navbar from "layouts/Navbars/Navbar.js";
import PageHeader from "layouts/Headers/PageHeader.js";
import Footer from "layouts/Footers/Footer.js";
import Error from "../sections/global/Error.js";
import FlipCard from "../sections/staff/FlipCard.js";
import "../../assets/css/style.css";
import {    Container , 
            Row , 
            Col , 
            Input ,
            InputGroup,
            InputGroupText,
            InputGroupAddon } from "reactstrap";
import useFetch from "../../hooks/fetch";



function StaffPage(props) {

  const [staff ,setStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const { response, isLoading , error} = useFetch({
      api: axios,
      method: "get",
      url: "/api/staff"
   });

  useEffect(() =>{

    if (response) {

      setStaff(response)
    }
   
    
  },[response])

 
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
       
      const results = staff.filter(person =>
      person.Rider.FullName.toLowerCase().includes(searchTerm)
  
    );

    setSearchResults(results);
  }, [searchTerm,staff]);


  return (
    <>
      <Navbar/>

        <PageHeader/>
        <div className="title text-center">
            <h2>The Dream Team </h2>
            <br/>
            <Row>
                <Col  sm="12" md={{ size: 6, offset: 3 }}>
                    <InputGroup  >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="nc-icon nc-single-02"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input
                            type="text"
                            placeholder="Search For A Team Member"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </Col>
            </Row>
            
          </div>
        <Row className="p-3" xs="1" sm="2" md="4">
         
            { Object.entries(searchResults).map((value, index) => { return  <Col> <FlipCard employee={searchResults[index]} key={searchResults[index].RowID} />
                
                </Col> 
              })}
        </Row>

        

      <Footer />
    </>
  );
}

export default StaffPage;
