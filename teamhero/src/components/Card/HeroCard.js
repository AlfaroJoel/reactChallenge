import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import OptionsCard from './OptionsCard'
import HeroContext from '../../store/HeroContext';
import './HeroCard.css'

const HeroCard = ({hero, isCardDelete}) => {

    const ctx = useContext(HeroContext);

    const addHeroHandler = () => {
        ctx.addHero(hero);
    }

    const removeHeroHandler = () => {
        ctx.deleteHero(hero.id);
    }

    const alignment = hero.biography.alignment === 'good' ? 'alignmentGood' : 'alignmentBad';

    return (
        <Card className={isCardDelete ?  'heroCard__Delete card '+alignment : 'heroCard card '+alignment}>
            <Card.Img variant="top" src={hero.image.url} className='cardImg' />
            <Card.Body>
                <Card.Title>{hero.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    Intelligence: {hero.powerstats.intelligence}
                    <br></br>
                    Strength: {hero.powerstats.strength}
                    <br></br>
                    Speed: {hero.powerstats.speed}
                    <br></br>
                    Durability: {hero.powerstats.durability}
                    <br></br>
                    Power: {hero.powerstats.power}
                    <br></br>
                    Combat: {hero.powerstats.combat}
                    <br></br>
                </ListGroupItem>
                <OptionsCard 
                    isCardDelete={isCardDelete}
                    onClick={isCardDelete ? removeHeroHandler : addHeroHandler}
                />
            </ListGroup>
        </Card>
    )
}

export default HeroCard;