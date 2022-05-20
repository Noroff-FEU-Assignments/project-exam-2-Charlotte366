import React from "react";
import Heading from "../../layout/Heading";
import Hero from "../../../images/BLUBLUB.gif";
import ImgBed from "../../../images/viewbed.jpg";
import ImgWater from "../../../images/clearwater.jpg";
import ImgDrizzle from "../../../images/drizzle.jpg";
import ImgCosy from "../../../images/fireplace.jpg";

export default function Home() {
   return  (
    <>
    
     <div className="imgHeader">
     <img src={Hero} alt="Bryggen Bergen" />
 </div>

 <div className="d-flex flex-row img-front">
 <div className="p-2"><img src={ImgBed} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgWater} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgDrizzle} alt="A bed with view from the hills"></img></div>
 <div className="p-2"><img src={ImgCosy} alt="A bed with view from the hills"></img></div>
 </div>


 
 
 <Heading title="Home" />

 </>
  );
}














  
 


