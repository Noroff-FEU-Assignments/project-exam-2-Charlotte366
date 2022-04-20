import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Hotels from "../hotels/Hotels";
import Contact from "../contact/Contact";
import Admin  from "../admin/Admin";

function Layout() {
    return (
     <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
       <NavLink to="/" exact>
        <Navbar.Brand>React App</Navbar.Brand>
       </NavLink>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
    
      </Container>
     </Router>
    );
   }
   
   export default Layout;

