import React from "react";
import Heading from "../../layout/Heading";
import Background from "../../../images/background.jpg";




export default function AdminLogin() {
 return (
  <>
<div className="background-container">

<img src={Background} alt="Bryggen Bergen" />
</div>

   <Heading title="Admin" />
  
  </>
 );
}