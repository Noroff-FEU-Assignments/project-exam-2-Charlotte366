import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../customerpages/home/Home";
import Hotels from "../customerpages/hotels/Hotels";
import Contact from "../customerpages/contact/Contact";
import Admin  from "../adminpages/admin/Admin";
import HotelSpecific  from "../hotelspecific/HotelSpecific";


function Layout() {
    return (
     <Router>
         <Navbar bg="dark" variant="dark" expand="lg">
        
 
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
     <Route path="/hotelspecific" component={HotelSpecific} />
    </Switch>
    
      </Container>
     </Router>
    );
   }
   
   export default Layout;

