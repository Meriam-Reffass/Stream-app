import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function AppNavBAr() {
       
    const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate()
    const toggle =() => {
        // this.setState({
        //     isOpen : !this.state.isOpen
        // });

        setIsOpen(!isOpen)
    }

        return(
            <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">StreamingApp</NavbarBrand>
                        <Button href="/stream" class="nav-item nav-link ml-1" >Stream</Button>
                        <Button href="/addblog" class="mx-auto">Write a blog</Button>

                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    
}

export default AppNavBAr;