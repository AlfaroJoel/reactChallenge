import React, { useState } from 'react';

const HeroContext = React.createContext({
    heroTeam: [],
    addHero: (hero) => {},
    deleteHero: (id) => {},
    badHeroes: 0,
    goodHeroes: 0
})

export const HeroContextProvider = (props) => {
    const [heroTeam, setHeroTeam] = useState([]);
    const [badHeroes, setBadHeroes] = useState(0);
    const [goodHeroes, setGoodHeroes] = useState(0);

    const addHeroTeam = (hero) => {
        const alignment = hero.biography.alignment;
        console.log('check')
        if(heroTeam.length < 6){
            if(alignment === 'good' && goodHeroes < 3){
                console.log('agregue a ', alignment , goodHeroes)
                setHeroTeam((prevState) => {
                    return [...prevState, hero]
                })
                setGoodHeroes(goodHeroes + 1);
            }else if(alignment === 'bad' && badHeroes < 3){
                console.log('agregue a ', alignment , goodHeroes)
                setHeroTeam((prevState) => {
                    return [...prevState, hero]
                })
                setBadHeroes(badHeroes + 1); 
            }else{
                console.log('Ya tienes 3 superheroes ', alignment)
            }
        }else{
            console.log('Tu equipo esta completo (maximo 6)')
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
                badHeroes
            }}
        >
        {props.children}
    </HeroContext.Provider>
}

export default HeroContext;