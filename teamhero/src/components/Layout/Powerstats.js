import { useContext, useState, useEffect } from "react";
import HeroContext from "../../store/HeroContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import './Powerstats.css';

const Powerstats = props => {
    const ctx = useContext(HeroContext);

    const [show, setShow] = useState(false);
    

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div className='powerstats'>
            <Modal size="sm" show={show} onHide={handleClick} centered>
                <Modal.Header>
                    <Modal.Title>Powerstats</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-start mx-auto'>
                    {ctx.powerstats.map((stat) => {
                        return (<p key={stat.prop}>
                           <span className='stats'>{stat.prop}</span> {': ' + stat.value}
                        </p>)
                    })}
                </Modal.Body>
                <Modal.Body className='average'>
                    <p><span>Average height: </span>{ctx.averHeight.toFixed(2)} cm</p>
                    <p><span>Average weight: </span>{ctx.averWeight.toFixed(2)} kg</p>
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