import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.css'

const Header = () => {
    return (
        <>

            <Navbar className='py-4 ' collapseOnSelect expand="lg" sticky='sticky' bg="primary " variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='home' href="#home"><img className='w-100 m-25 img-size' src='https://i.ibb.co/C0b9Cc8/Management-Master.jpg' alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='home' className='mx-2' href="#products"> <h4 className='text-container'>Home</h4></Nav.Link>
                            <Nav.Link as={Link} to='manage' className='mx-2' href="#manage"><h4>Manage</h4></Nav.Link>
                            <Nav.Link as={Link} to='products' className='mx-2' href="#pricing"> <h4>Items</h4></Nav.Link>
                            <Nav.Link as={Link} to='document' className='mx-2' href="#documantation"> <h4>Documantation</h4></Nav.Link>
                            <Nav.Link as={Link} to='additem' className='mx-2' href="#additem"> <h4>Add New</h4></Nav.Link>
                            <Nav.Link as={Link} to='myitems' className='mx-2' href="#myitems"> <h4>My Items</h4></Nav.Link>
                            <Nav.Link as={Link} to='login' className='mx-3 px-3 space-message text-white' href="#login"><h4>Log In</h4></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

    );
};

export default Header;