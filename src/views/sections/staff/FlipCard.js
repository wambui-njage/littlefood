import React ,{ useState ,useEffect } from "react";
import {
    Container,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    FormGroup,
    Input,
    Spinner
} from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import useFetch from "../../../hooks/fetch";
import axios from 'axios';



const FlipCard = (props) => {

const { employee } = props
const [modal, setModal] = useState(false);
const [loading, setLoading] = useState(false);
const [user, setUser] = useState({});
const [amount, setAmount] = useState(0);
const [limittype, setLimitType] = useState("");
const [message, setMessage] = useState("");

const toggle = emp => {

  setUser(emp)
  setModal(!modal);

}

const getLimit = staff =>{

  const stafflimit = Object.keys(staff.CorporateWallet)
  .filter(key => key.toString().includes("Limit"))
  .reduce((obj, key) => {
   if (staff.CorporateWallet[key] > 0)
    return staff.CorporateWallet[key];
  }, {});

//  const stafflimit = staff.CorporateWalletfilter(obj => {

               
             
//                         if(index.toString().includes("Limit") && value > 0){
                                  
//                                   return `${value} ${index}`
//                           }

                      
                      
                
//                    })

                   console.log(stafflimit)

                  //  return stafflimit;

}


const onSubmit = (event) => {

    event.preventDefault();
    setLoading(true)
    fetch('/api/wallet', {
      method: 'post',
      body: JSON.stringify({
        MobileNumber:user.MobileNumber,
        LimitType:limittype,
        Amount:amount,
        CorporateID:user.CorporateID
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data  => {

        setLoading(false)
        setMessage(data.message)
        setTimeout(function(){
           setModal(!modal)
           setMessage("")
        }, 3000);
      
        
      })
      
      .catch(err => {
        setLoading(false)
        setMessage(err)
        setTimeout(function(){
           setMessage("")
           setModal(!modal)
        }, 3000);
      })
  };



const addDefaultSrc = (ev) => {
      ev.target.src = require("../../../assets/img/default-avatar.png")
    }
 
return ( <>
<div>

    <Modal
        isOpen={modal}
        toggle={() => setModal(false)}
        modalClassName='modal-register'
      >
      <LoadingOverlay
            active={loading}
            spinner
            text='Loading your content...'
            >

      
      
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h6 className="text-muted">Set Limit For {user.OfficialName} </h6>
     
          <h3 className="modal-title text-center text-warning">{message}</h3>
        </div>
        <div className="modal-body">

          
            
          { !user.CorporateWallet && <form onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <label>Limit Type</label>
             <Input type="select" name="limittype" id="exampleSelect1" required onChange={event => setLimitType(event.target.value)}>
              <option hidden ></option>
              <option value="L">LOAD CASH</option>
              <option value="D">DAY</option>
              <option value="W">WEEK</option>
              <option value="M">MONTH</option>
             
            </Input>
          </FormGroup>
          <FormGroup>
            <label>Amount</label>
            <Input defaultValue="" name="amount" type="number" onChange={event => setAmount(event.target.value)} required />
          </FormGroup>
          <Button type="submit" block className="btn-round" onClick={onSubmit}  color="default">
            Set Limit
          </Button>
          </form> }

          

        </div>
      </LoadingOverlay>
      </Modal>
        
 
      <div className="flip-card m-5">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                 <img  className="img-circle"  
                 src={employee.Rider.ProfilePicture} 
                 onError={addDefaultSrc}
                 loading="lazy"
                 alt="Avatar" 
                 width="200px" 
                 height="200px"  
                 />
                 <p>{employee.Rider.FullName}</p>
                 <p>{employee.Corporate.Name}</p>
            </div>
            <div className="flip-card-back">
                <h3>{employee.Rider.FullName}</h3>
                <p>{employee.MobileNumber}</p>
                <p>{employee.CompanyEmail.split(",")[0]}</p>
                <p>{employee.Corporate.Name}</p>
                { !employee.CorporateWallet && <Button className="btn-round btn-warning" onClick={() => toggle(employee)}>
                  <i className="fa fa-unlock-alt" />
                    Activate
                </Button>}

                { employee.CorporateWallet && <p>{getLimit(employee)}</p>}
            
            </div>
        </div>
      </div>
      </div>

    </> );
}
 
export default FlipCard;