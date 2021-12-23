import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand><Link to='/' className=''>Inicio</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link variant="secondary"><Link to='/Menu'>Menu</Link></Nav.Link>
                            <Nav.Link><Link to='/Servicio'>Servicios</Link></Nav.Link>
                            <Nav.Link><Link to='/Contacto'>Contacto</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default NavigationBar
