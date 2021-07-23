import { useContext, useState, useEffect } from "react";
import HeroContext from "../../store/HeroContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import './Powerstats.css';

const Powerstats = props => {
    const ctx = useContext(HeroContext);

    const [show, setShow] = useState(false);
    const [powerstats, setPowerstats] = useState([])

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div className='powerstats'>
            <Modal size="sm" show={show} onHide={handleClick} centered>
                <Modal.Header>
                    <Modal.Title>Powerstats</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <p>Intelligence: {}</p>
                    <p>Intelligence: 80</p>
                    <p>Intelligence: 80</p>
                </Modal.Body>
                <Button variant="dark" onClick={handleClick}>
                    Close
                </Button>
            </Modal>
            <Button onClick={handleClick} variant='dark' size="lg">Powerstats</Button>
        </div>
    )
}

export default Powerstats;