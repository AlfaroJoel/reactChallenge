import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import OptionsCard from './OptionsCard'
import HeroContext from '../../store/HeroContext';
import './HeroCard.css'

const HeroCard = ({ hero, isCardDelete, messageHandler }) => {

    const ctx = useContext(HeroContext);
    const alignment = hero.biography.alignment;
    const classCard = alignment === 'bad' ? 'alignmentBad' : 'alignmentGood';
    const [showDetails, setShowDetails] = useState(false);

    const addHeroHandler = () => {
        if (ctx.heroTeam.length < 6) {
            for (let actualhero in ctx.heroTeam) {
                if (ctx.heroTeam[actualhero].id === hero.id) {
                    messageHandler('You cannot add the same hero twice', true);
                    return;
                }
            }
            if ((alignment === 'good' || alignment === 'neutral') && ctx.goodHeroes < 3) {
                ctx.addHero(hero);
                messageHandler('superhero added correctly', false);
            } else if (alignment === 'bad' && ctx.badHeroes < 3) {
                ctx.addHero(hero);
                messageHandler('superhero added correctly', false);
            } else {
                messageHandler(`You already have 3 superheroes ${alignment}`, true);
                return;
            }
        } else {
            messageHandler('Your team is already complete (maximum 6)', true);
            return;
        }
    }

    const removeHeroHandler = () => {
        ctx.deleteHero(hero);
    }

    const detailsHandler = () => {
        setShowDetails(!showDetails);
    }

    return (
        <Card className={isCardDelete ? 'heroCard__Delete card mb-2 mx-auto ' + classCard : 'heroCard card mb-2 mx-auto ' + classCard}>
            <Card.Img variant="top" src={hero.image.url} className='cardImg' />
            <Card.Body>
                <Card.Title>{hero.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {showDetails ?
                    <ListGroupItem>
                        {hero.biography.aliases[0]} 
                        <br></br>
                        Weight: {hero.appearance.weight[1]}
                        <br></br>
                        Height: {hero.appearance.height[1]}
                        <br></br>
                        Eye Color: {hero.appearance['eye-color']}
                        <br></br>
                        Hair Color: {hero.appearance['hair-color']}
                        <br></br>
                        Work: {hero.work.base}
                    </ListGroupItem>
                    : <ListGroupItem>
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
                    </ListGroupItem>}
                <OptionsCard
                    isCardDelete={isCardDelete}
                    onClick={isCardDelete ? removeHeroHandler : addHeroHandler}
                    onClickDetails={detailsHandler}
                />
            </ListGroup>
        </Card>
    )
}

export default HeroCard;