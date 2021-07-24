import React, { useState, useEffect } from 'react';

const HeroContext = React.createContext({
    heroTeam: [],
    addHero: (hero) => { },
    deleteHero: (id) => { },
    badHeroes: 0,
    goodHeroes: 0,
    powerstats: {},
    averHeight: 0,
    averWeight: 0,
})

export const HeroContextProvider = (props) => {
    const [teamHero, setTeamHero] = useState([]);
    const [badHeroes, setBadHeroes] = useState(0);
    const [goodHeroes, setGoodHeroes] = useState(0);
    const [averHeight, setAverHeight] = useState(0);
    const [averWeight, setAverWeight] = useState(0);
    const [powerstats, setPowerstats] = useState([])

    useEffect(() => {
        updatePowerstats();
    }, [teamHero])

    const updatePowerstats = () => {
        let defaultPowerstats = [
            { prop: 'intelligence', value: 0 },
            { prop: 'strength', value: 0 },
            { prop: 'speed', value: 0 },
            { prop: 'durability', value: 0 },
            { prop: 'power', value: 0 },
            { prop: 'combat', value: 0 }
        ];
        teamHero.map((item) => {
            defaultPowerstats.map((stat) => {
                stat.value += parseInt(item.powerstats[stat.prop])
            })
        })
        defaultPowerstats.sort((a, b) => {
            return b.value - a.value
        })
        setPowerstats(defaultPowerstats);
    }

    const addHeroTeam = (hero) => {
        const alignment = hero.biography.alignment;

        setTeamHero((prevState) => {
            return [...prevState, hero]
        })
        if (alignment === 'good' || alignment === 'neutral') {
            setGoodHeroes(goodHeroes + 1);
            console.log(hero.name + ' successfully added to your team, Hero good: ', goodHeroes + 1, ' total Team: ', teamHero.length + 1)
        } else {
            setBadHeroes(badHeroes + 1);
            console.log(hero.name + ' successfully added to your team, Hero bad: ', badHeroes + 1, ' total Team: ', teamHero.length + 1)
        }
    }

    const deleteHeroTeam = (hero) => {
        setTeamHero((prevState) => {
            return prevState.filter((h) => h.id !== hero.id)
        })
        if (hero.biography.alignment === 'good' || hero.biography.alignment === 'neutral') {
            setGoodHeroes(goodHeroes - 1);
        } else {
            setBadHeroes(badHeroes - 1);
        }
    }



    return <HeroContext.Provider
        value={{
            heroTeam: teamHero,
            addHero: addHeroTeam,
            deleteHero: deleteHeroTeam,
            goodHeroes,
            badHeroes,
            powerstats: powerstats,
            averHeight: averHeight,
            averWeight: averWeight
        }}
    >
        {props.children}
    </HeroContext.Provider>
}

export default HeroContext;