import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
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
import Dashboard  from "../adminpages/Dashboard";
import AdminHotels  from "../adminpages/AdminHotels";
import AdminEnquery  from "../adminpages/AdminEnquery";
import AdminContact  from "../adminpages/AdminContact";
import AdminEditHotel  from "../adminpages/AdminEditHotel";
import AdminAddHotel  from "../adminpages/AdminAddHotel";
import Logo from "../../images/LogoHolidaze.png";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BASE_URL } from "../../constants/api";






function Layout() {
  const [auth, setAuth] = useContext(AuthContext);

	let history = useHistory();


	function logout() {
		setAuth(null);
	}



    return (
      <>
   
      <div className="logo">
      <div className="d-flex justify-content-center logo">
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
     
			{auth ? (
				<>
			<NavLink to="/dashboard" className="nav-link">
         Dashboard
         </NavLink> <Button class="logout" onClick={logout}  href="/">Log out</Button>
				</>
			) : (
		    <NavLink to="/admin" exact className="nav-link">
          Admin
         </NavLink>
			)}
    
        </Nav>
       </Navbar.Collapse>
      </Navbar>
     
    
    
      <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/hotels" component={Hotels} />
     <Route path="/contact" component={Contact} />
     <Route path="/admin" component={Admin} />
     <Route path="/hotelspecific/:id" component={HotelSpecific} />
     <Route path="/enquiry/:HotelName" component={Enquiry} />
     <Route path="/dashboard" component={Dashboard} />
     <Route path="/adminHotels" component={AdminHotels} />
     <Route path="/adminenquery" component={AdminEnquery} />
     <Route path="/admincontact" component={AdminContact} />
     <Route path="/adminedithotel/:id" component={AdminEditHotel} />
     <Route path="/adminaddhotel" component={AdminAddHotel} />


    

    </Switch>
    

     
     
     </Router>
  
    

    
     </>
    );
    
   }

   
   
   export default Layout;

