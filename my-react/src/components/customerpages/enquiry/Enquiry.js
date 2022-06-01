import Heading from "../../layout/Heading";
import HotelEnquiry from "../../functions/HotelEnquiry";
import { useParams } from "react-router-dom";





export default function HotelBooking() {
    const { HotelName } = useParams();
  
 
return (
  <>

   <Heading title= {HotelName} />
   <HotelEnquiry />
   

  </>
 );
}

