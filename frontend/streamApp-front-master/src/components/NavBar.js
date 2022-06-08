import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "./../images/logo1.jpeg";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Button,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap' ;
import '../App.css'

function AppNavBAr() {
    let item=JSON.parse(localStorage.getItem('user'))
    const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate()
    const toggle =() => {
      

        setIsOpen(!isOpen)
    }
    const [signin,setSignin]=useState("Sign In")
    const [signup,setSignup]=useState("Sign up")
    

        return(
            
                <Navbar color="dark" dark expand="md" >
                    <Container >
                    <Link to="/">
                            <img component = {Link} to = "/" src= {logo} height ='50'/>
                        </Link>
                        <div className='direct'>
                        
                       
                            <Link to="/stream" className='text-light'  >Stream</Link>
                            <Link to="/blogs" className='text-light' >Blogs</Link>
                            <Link to='/addblog' className='text-light'>Add Blogs</Link>
                            <Link to={"/tournois"} className='text-light' onClick={navigate} >Tournament</Link>
                            <Link to="/signIn" className='text-light' >{signin}</Link>
                            <Link to="/signup" className='text-light' >{signup}</Link>

                        </div>

                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            
        )
    
}

export default AppNavBAr;