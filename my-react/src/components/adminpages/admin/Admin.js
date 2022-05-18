import React from "react";
import Heading from "../../layout/Heading";
import Background from "../../../images/background.jpg";

export default function AdminLogin() {
 return (
  <>
<div className="background">
<div style= {{ backgroundImage: `url(${Background})`}}>
      Hello World
    </div>
    </div>
  
   <Heading title="Admin" />
  

  
  </>
 );
}