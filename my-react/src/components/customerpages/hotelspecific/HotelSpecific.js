import Heading from "../../layout/Heading";
import HotelDetails from "../../functions/HotelDetails";
import HotelImages  from "../../functions/HotelImages";

export default function HotelSpecific() {
 return (
  <>
   <Heading title="Hotel Specific" />
   <HotelDetails />
   <HotelImages />
  </>
 );
}