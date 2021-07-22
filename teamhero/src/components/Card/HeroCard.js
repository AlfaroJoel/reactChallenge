import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import OptionsCard from './OptionsCard'

import './HeroCard.css'

const HeroCard = props => {

    return (
        <Card className={props.isCardDelete ?  'heroCard__Delete' : 'heroCard'}>
            <Card.Img variant="top" src={props.image.url} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    Intelligence: {props.powerstats.intelligence}
                    <br></br>
                    Strength: {props.powerstats.strength}
                    <br></br>
                    Speed: {props.powerstats.speed}
                    <br></br>
                    Durability: {props.powerstats.durability}
                    <br></br>
                    Power: {props.powerstats.power}
                    <br></br>
                    Combat: {props.powerstats.combat}
                    <br></br>
                </ListGroupItem>
                <OptionsCard isCardDelete={props.isCardDelete}/>
            </ListGroup>
        </Card>
    )
}

export default HeroCard;