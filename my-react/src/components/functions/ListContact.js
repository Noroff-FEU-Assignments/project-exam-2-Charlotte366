import { useState, useEffect } from "react";
import { API_CONTACT } from "../../constants/api";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/button";
import Container from "react-bootstrap/Container";
import "../../App.scss";
import { Link } from "react-router-dom";


function ListContact() {
 const [hotel, setHotel] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(API_CONTACT);

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
 
   
    <div className="list-contacts">

       {hotel.map(function (contacts) {
   return (

  <div key={contacts.id}>
  <Row>
    <Col>
      <Card>
        <Card.Body>
       
          <Card.Text>
     
          <p>Name: {contacts.attributes.name}</p>
           <p> Email: {contacts.attributes.email}</p>
           <p> Phone number: {contacts.attributes.phone}</p>
           <p> Message: {contacts.attributes.message}</p>
            <p> Time sent in: {contacts.attributes.createdAt}</p>
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


export default ListContact;