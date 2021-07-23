import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/home">TeamHero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <NavLink className='link m-auto mx-4' to="/home">My Team</NavLink>
                        <NavLink className='link m-auto mx-4' to="/search">Search Hero</NavLink>
                        <Button className='mx-5' variant="outline-light">Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;