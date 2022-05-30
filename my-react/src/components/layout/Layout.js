import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../customerpages/home/Home";
import Hotels from "../customerpages/hotels/Hotels";
import Contact from "../customerpages/contact/Contact";
import Admin  from "../adminpages/Admin";
import HotelSpecific  from "../customerpages/hotelspecific/HotelSpecific";
import Enquiry from "../customerpages/enquiry/Enquiry";
import Logo from "../../images/LogoHolidaze.png";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ReactDOM from 'react-dom'


function Layout() {

    return (
      <>
      
      <div className="logo">
      <div className="d-flex justify-content-center">
<img src={Logo} alt="Logo" />
</div>


<Form className="search-bar">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
      


      
        <Button variant="outline-success">Search</Button>
      </Form>
      </div>

 
    
     <Router>
     
         <Navbar fixed variant="dark" expand="lg">
 
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
         <NavLink to="/" exact className="nav-link">
          Home
         </NavLink>
         <NavLink to="/hotels" className="nav-link">
          Hotels
         </NavLink>
         <NavLink to="/contact" className="nav-link">
          Contact
         </NavLink>
         <NavLink to="/admin" className="nav-link">
          Admin
         </NavLink>
    
        </Nav>
       </Navbar.Collapse>
      </Navbar>
     
    
  
  
     
      <Container>
      <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/hotels" component={Hotels} />
     <Route path="/contact" component={Contact} />
     <Route path="/admin" component={Admin} />
     <Route path="/hotelspecific/:id" component={HotelSpecific} />
     <Route path="/enquiry/:id" component={Enquiry} />
    </Switch>
    
      </Container>
     
     
     </Router>
    

    
     </>
    );
    
   }
   
   
   export default Layout;

