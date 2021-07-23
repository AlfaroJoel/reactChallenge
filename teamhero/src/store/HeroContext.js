import React, { useState } from 'react';

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
    const [heroTeam, setHeroTeam] = useState([]);
    const [badHeroes, setBadHeroes] = useState(0);
    const [goodHeroes, setGoodHeroes] = useState(0);
    const [averHeight, setAverHeight] = useState(0);
    const [averWeight, setAverWeight] = useState(0);
    const [powerstats, setPowerstats] = useState([
        { prop: 'intelligence', value: 0 },
        { prop: 'strength', value: 0 },
        { prop: 'speed', value: 0 },
        { prop: 'durability', value: 0 },
        { prop: 'power', value: 0 },
        { prop: 'combat', value: 0 }
    ])

    const checkAddHero = (hero) => {
        const alignment = hero.biography.alignment;
        if (heroTeam.length < 6) {
            for (let actualhero in heroTeam) {
                if (heroTeam[actualhero].id === hero.id) {
                    console.log('No puedes agregar el mismo personaje dos veces')
                    return false;
                }
            }
            if ((alignment === 'good' || alignment === 'neutral') && goodHeroes < 3) {
                return true;
            } else if (alignment === 'bad' && badHeroes < 3) {
                return true;
            } else {
                console.log('Ya tienes 3 superheroes ', alignment);
                return false;
            }
        } else {
            console.log('Tu equipo esta completo (maximo 6)');
            return false;
        }
    }

    const updateStatistics = (hero) => {
        let arrayPowerstats = []
        for (let powerstat in powerstats) {   //recorro todo el state powerstats
            const props = powerstats[powerstat].prop;
            const stat = {  //declaro la prop, y sumo el valor actual del state mas el de hero
                prop: props, value: powerstats[powerstat].value += parseInt(hero.powerstats[props])
            }
            arrayPowerstats.push(stat);
        }
        arrayPowerstats.sort((a, b) => { //ordeno array
            return b.value - a.value
        })
        setPowerstats(arrayPowerstats);

        const heroHeight = parseInt(hero.appearance.height[1].split(' ')[0]);
        const heroWeight = parseInt(hero.appearance.weight[1].split(' ')[0]);
        setAverHeight(((averHeight + heroHeight) / (heroTeam.length + 1)));
        setAverWeight(((averWeight + heroWeight) / (heroTeam.length + 1)));
    }

    const addHeroTeam = (hero) => {
        const alignment = hero.biography.alignment;

        if (checkAddHero(hero)) {
            setHeroTeam((prevState) => {
                return [...prevState, hero]
            })
            if (alignment === 'good' || alignment === 'neutral') {
                setGoodHeroes(goodHeroes + 1);
                console.log(hero.name + ' successfully added to your team, Hero good: ', goodHeroes + 1, ' total Team: ', heroTeam.length + 1)
            } else {
                setBadHeroes(badHeroes + 1);
                console.log(hero.name + ' successfully added to your team, Hero bad: ', badHeroes + 1, ' total Team: ', heroTeam.length + 1)
            }
            updateStatistics(hero);
        }
    }

    const deleteHeroTeam = (id) => {
        setHeroTeam((prevState) => {
            return prevState.filter((hero) => hero.id !== id)
        })
    }



    return <HeroContext.Provider
        value={{
            heroTeam,
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