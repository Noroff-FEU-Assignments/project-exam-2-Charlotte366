import { useState, useEffect } from "react";
import { API_HOTELS } from "../../constants/api";
import { useParams, useHistory,Link,Routes,Route,useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../App.scss";
import Button from "react-bootstrap/button";
import HotelImages  from "../functions/HotelImages";
import Footer from "../layout/Footer";



function HotelDetails() {
 const [hoteldetails, setHoteldetails] = useState([]);
 const [hotel, setHotel] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useHistory();

 const { id } = useParams();

 if (!id) {
 history.push("/");
 }

 const URL = API_HOTELS + "/" + id;

 useEffect(
     function () {
  async function fetchData() {
   try {
    const response = await fetch(URL);

    if (response.ok) {
     const json = await response.json();
     console.log(json);
     setHotel(json.data);
     setHoteldetails(json.data);
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
 }, 
 []
 );


 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>ERROR: An error occured</div>;
 }


const HotelName = hoteldetails.attributes.name;


function OrderNow() {
  history.push(`/enquiry/${HotelName}`);
}

 return (

        <>
      
        <Container>
      
      
        
    <Col>
      <Card>
        <Card.Body>
        <div className="HotelDetail-up">
        <Card.Title>
          <div className="detail-up" >
                   <h2>{HotelName}</h2>
                   <p>Centrum is {hotel.attributes.centrumdistance} km away.</p>
           <p>Bergen airport is {hotel.attributes.airportdistance} km away </p>
          Price for one night: {hoteldetails.attributes.price}
          </div>

          <div className="button-float">
                   <Button variant="primary" onClick={OrderNow}>ORDER NOW</Button>{' '}
                   </div>
                   </Card.Title>
                   </div>
                   
          <Card.Text>
          {hoteldetails.attributes.description}
          </Card.Text>
      
         
        </Card.Body>
        <HotelImages />
       
     
      </Card>
    </Col>

   
       
    
        </Container>

        <div className="vision">
          <h2>"We are here for your next holiday"</h2>
        </div>

        <Footer />
    </>
   
       
   );
   }


   export default HotelDetails;

