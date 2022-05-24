import { useState, useEffect } from "react";
import { API_HOTELS } from "../../constants/api";
import { useParams, useHistory } from "react-router-dom";
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

 return (

        <>
        <Container>
        <div className="HotelDetail">
        <Row xs={1} md={2}>
    <Col>
      <Card>
        <Card.Body>
        <Card.Title> 
                   <h2>{hoteldetails.attributes.name}</h2>
                   <Button variant="primary">ORDER NOW</Button>{' '}
                   </Card.Title>
          <Card.Text>
          Price for one night: {hoteldetails.attributes.price}
         
          </Card.Text>
          <HotelImages />
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
        </Container>

        <div className="vision">
          <h2>"We are here for your next holiday"</h2>
        </div>

        <Footer />
    </>
   
       
   );
   }


   export default HotelDetails;

   /*<Card>
   <Link to={`hotelspecific/${hotel.id}`}>
     <Card.Body>
     <Card.Img variant="left" src={hotel.attributes.mainimage.data.attributes.formats.small.url} width="300px" height="200px" />
     <div className="textone">
     <Card.Title> 
                <h2>{hotel.attributes.name}</h2>
                </Card.Title>
       <Card.Text>
        <p>Centrum is {hotel.attributes.centrumdistance} km away.</p>
        <p>Bergen airport is {hotel.attributes.airportdistance} km away </p>
       </Card.Text>
     </div>
   
     <div className="texttwo">
     <p> {hotel.attributes.price} kr </p>
     <Button variant="primary">ORDER NOW</Button>{' '}
     </div>
     
     </Card.Body>
     </Link>
   </Card>

   */