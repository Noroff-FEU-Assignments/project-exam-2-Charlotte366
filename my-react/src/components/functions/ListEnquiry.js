import { useState, useEffect } from "react";
import { API_ENQUIRY } from "../../constants/api";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/button";
import Container from "react-bootstrap/Container";
import "../../App.scss";
import { Link } from "react-router-dom";


function ListEnquiry() {
 const [hotel, setHotel] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(API_ENQUIRY);

    if (response.ok) {
     const json = await response.json();
     console.log(json);
     setHotel(json.data);
    } else {
     setError("An error occured");
    }
   } catch (error) {
    setError(error.toString());
   } finally {
    setLoading(false);
   }
  }
  fetchData();
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>ERROR: An error occured</div>;
 }

 return (
 
   
    <div className="list-enquiry">

       {hotel.map(function (enquiry) {
   return (

  <div key={enquiry.id}>
  <Row>
    <Col>
      <Card>
        <Card.Body>
       
          <Card.Text>
          <p>Hotel Name: </p>
          <p>Customer Name:{enquiry.attributes.name}</p>
           <p> Customer Email:{enquiry.attributes.email}</p>
           <p> Comments:{enquiry.attributes.comments}</p>
            <p> Number of poeple:{enquiry.attributes.number}</p>
            <p> Number of days:{enquiry.attributes.days}</p>
            <p> Time sent in:{enquiry.attributes.createdAt}</p>
          </Card.Text>
        </Card.Body>
    
      </Card>
    </Col>
</Row>  
 </div>
   );
})}
   </div>


);
}


export default ListEnquiry;