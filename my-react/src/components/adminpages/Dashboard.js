import Heading from "../layout/Heading";
import Button from "react-bootstrap/button";
import Row from "react-bootstrap/Row";






export default function Dashboard() {
 return (
  <>
   <Heading title="Admin Dashboard" />
   <div className="button-dashboard">
   <Row xs={1} md={1} className="g-1">
   <Button variant="primary" size="lg" href="/adminhotels">See and adminstrate hotels</Button> 
   <Button variant="primary" size="lg" href="/adminenquery">Handle booking enquiries</Button> 
   <Button variant="primary" size="lg" href="/admincontact">Handle contact requests</Button> 
   </Row>
  </div>
  
 

  </>
 );
}