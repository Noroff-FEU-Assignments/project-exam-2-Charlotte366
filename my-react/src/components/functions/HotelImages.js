import { useState, useEffect } from "react";
import { API_HOTELS } from "../../constants/api";
import { useParams, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../App.scss";



function HotelImages() {
 const [hotelimages, setHotelimages] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useHistory();

 const { id } = useParams();

 if (!id) {
 history.push("/");
 }

 const URL = API_HOTELS + "/" + id + "?populate=*";

 useEffect(
     function () {
  async function fetchData() {
   try {
    const response = await fetch(URL);

    if (response.ok) {
     const json = await response.json();
     console.log(json);
     setHotelimages(json.data.attributes.images.data);
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
 <div className="list-images">

       {hotelimages.map(function (hotelimages) {
   return(
   <div key ={hotelimages.id}>
<Col>
      <Card>
	   <Card.Body>
        <Card.Img src={hotelimages.attributes.url} width="300px" height="200px" />
		  <Card.Text>
           {hotelimages.attributes.alternativeText}
          </Card.Text>     
        </Card.Body>
      </Card>
    </Col>  
     </div>
   )
   })}
  </div>
  );
  
  }


   export default HotelImages;