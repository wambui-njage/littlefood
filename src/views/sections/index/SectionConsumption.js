import React ,{useState,useEffect} from "react";
import ConsumptionLoading from "../global/ConsumptionLoading";
import {
  
  Container,
  Table,
  Progress 
} from "reactstrap";
import axios from "axios";
import useFetch from "../../../hooks/fetch";

function SectionConsumption() {

  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)

  const { response ,error} = useFetch({
    api: axios,
    method: "get",
    url: "/api/reports/users"
 });

 useEffect(() =>{

  setLoading(false)
  if (response) {

      
      setUsers(response.slice(0, 5))
      console.log(users)

  }

},[response])


  return (
    <>
      { loading &&  <ConsumptionLoading/> }
      {!loading && !error && users.length && (<div className="section">
        <Container>
          <div className="title">
            <h2 className="text-center">Comsuption Per User </h2>
          </div>
          
    
          <Table borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Consumption</th>
        </tr>
      </thead>
      <tbody>
       
        { Object.entries(users).map((value,key) => {  return   <tr key={users[key].MobileNumber}>
            <th scope="row">{key+1}</th>
            <td>{users[key].FullName}</td>
            <td>{users[key].MobileNumber}</td>
            <td>
              <Progress value={users[key].total} max="50000" />
              <div className="text-center">Ksh{users[key].total} of Ksh5000</div>
            </td>
          </tr>

        })}
          
      
          
      </tbody>
    </Table>
          
         
        </Container>
      </div>)}
    </>
  );
}

export default SectionConsumption;
