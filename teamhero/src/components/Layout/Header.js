import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import UserContext from '../../store/UserContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const ctxUser = useContext(UserContext);
    const history = useHistory();

    const buttonHandler = () => {
        ctxUser.setAuthenticated(false);
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>TeamHero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav  className='align-items-center'>
                        <NavLink className='link my-2 mx-lg-4' to="/home">My Team</NavLink>
                        <NavLink className='link my-2 mx-lg-4' to="/search">Search Hero</NavLink>
                        <Button className='mx-5 my-2' variant="outline-light" onClick={buttonHandler}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;