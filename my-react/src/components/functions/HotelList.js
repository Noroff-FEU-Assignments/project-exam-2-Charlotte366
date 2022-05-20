import { useState, useEffect } from "react";
import { API_HOTELS_POPULATE } from "../../constants/api";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/button";
import "../../App.scss";
import { Link } from "react-router-dom";


function HotelList() {
 const [hotel, setHotel] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(API_HOTELS_POPULATE);

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
 
   
    <div className="list-hotels">

       {hotel.map(function (hotel) {
   return (
    <div key={hotel.id}>
  <Row xs={1} md={1} className="g-1">
    <Col>
      <Card>
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
    </Col>
</Row>  
 </div>
   );
})}
   </div>


);
}


export default HotelList;