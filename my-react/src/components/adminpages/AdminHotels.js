import Heading from "../layout/Heading";
import ListHotel from "../functions/ListHotel";
import Button from "react-bootstrap/button";





export default function AdminAddHotel() {
 return (
  <>
   <Heading title="Administrate hotels" />
   <Button variant="warning" href="/AdminAddHotel">ADD NEW HOTEL</Button>{' '}
   <ListHotel />

 
  </>
 );
}