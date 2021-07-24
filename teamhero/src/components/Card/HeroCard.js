import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import OptionsCard from './OptionsCard'
import HeroContext from '../../store/HeroContext';
import './HeroCard.css'

const HeroCard = ({ hero, isCardDelete, errorHandler }) => {

    const ctx = useContext(HeroContext);
    const alignment = hero.biography.alignment;

    const addHeroHandler = () => {
        if (ctx.heroTeam.length < 6) {
            for (let actualhero in ctx.heroTeam) {
                if (ctx.heroTeam[actualhero].id === hero.id) {
                    errorHandler('You cannot add the same hero twice');
                    return;
                }
            }
            if ((alignment === 'good' || alignment === 'neutral') && ctx.goodHeroes < 3) {
                ctx.addHero(hero);
            } else if (alignment === 'bad' && ctx.badHeroes < 3) {
                ctx.addHero(hero);
            } else {
                errorHandler(`You already have 3 superheroes ${alignment}`);
                return;
            }
        } else {
            errorHandler('Your team is already complete (maximum 6)');
            return;
        }
    }

    const removeHeroHandler = () => {
        ctx.deleteHero(hero);
    }

    const classCard = alignment === 'bad' ? 'alignmentBad' : 'alignmentGood';

    return (
        <Card className={isCardDelete ? 'heroCard__Delete card ' + classCard : 'heroCard card ' + classCard}>
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