import { useContext, useState} from "react";
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
                           <span className='text-uppercase text-primary'>{stat.prop}</span> {': ' + stat.value}
                        </p>)
                    })}
                </Modal.Body>
                <Modal.Body className='text-center'>
                    <p><span className='text-success'>Average height: </span>{ctx.statistics[0].value} cm</p>
                    <p><span className='text-success'>Average weight: </span>{ctx.statistics[1].value} kg</p>
                </Modal.Body>
                <Button variant="dark" onClick={handleClick}>
                    Close
                </Button>
            </Modal>
            <Button onClick={handleClick} variant='warning' size="lg">Powerstats</Button>
        </div>
    )
}

export default Powerstats;