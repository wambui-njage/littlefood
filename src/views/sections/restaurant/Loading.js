import React from "react";
import Shimmer from 'react-js-loading-shimmer';
import _ from "lodash"

import {
    Container,
    Card, 
    CardTitle, 
    CardText,
    CardDeck, 
    CardBody
} from "reactstrap";
  
const Loading = () => {
    return ( 
    <>

<Container>
<CardDeck>
    
{ _.times(4, (i) => { return  <Card key={i}>
  
  
  <CardBody>
  
    <CardTitle><Shimmer height={"25px"}/></CardTitle>
    <CardTitle><Shimmer height={"25px"}/></CardTitle>
    <CardText><Shimmer height={"25px"}/></CardText>
        
    <div className="col-6" >
        <Shimmer height={"25px"}/>
    </div>

  </CardBody>
</Card>
})}
    

</CardDeck>
</Container>
    
    </> );
}
 
export default Loading;