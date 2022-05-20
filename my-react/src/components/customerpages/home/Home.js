import React from "react";
import Heading from "../../layout/Heading";
import Hero from "../../../images/BLUBLUB.gif";
import ImgBed from "../../../images/viewbed.jpg";
import ImgWater from "../../../images/clearwater.jpg";
import ImgDrizzle from "../../../images/drizzle.jpg";
import ImgCosy from "../../../images/fireplace.jpg";
import ImgbedHotel from "../../../images/1.jpg";
import ImgMagic from "../../../images/2.jpg";
import ImgHotel from "../../../images/3.jpg";
import Footer from "../../layout/Footer";


export default function Home() {
   return  (
    <>
    
     <div className="imgHeader">
     <img src={Hero} alt="Bryggen Bergen" />
 </div>

 <Heading title="Home" />

 <div className="d-flex flex-row img-front">
 <div className="p-2"><img src={ImgBed} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgWater} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgDrizzle} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgCosy} alt="A bed with view from the hills"></img></div>
 </div>


 <div className="intro-container">
   <div className="vision-h2">
   <h2>Why Order with Holidaze</h2>
     </div> 
     <div className="vision-text">
       <p>
       Get accommodation for every 20th
accommodation you book
       </p>
     </div>
     <div className="vision-text">
       <p>Free cancellation</p>
     </div>
     <div className="vision-text">
       <p>We are a local tourism agency
and we know Bergen  </p>
     </div>
     </div>

     <div className="d-flex flex-row img-frontbottom">
 <div className="p-2"><img src={ImgbedHotel} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgMagic} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgHotel} alt="A bed with view from the hills"></img></div>

 </div>

 <Footer />


 


 
 


 </>
  );
}














  
 


