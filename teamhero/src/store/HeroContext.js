import React, { useState } from 'react';

const HeroContext = React.createContext({
    heroTeam: [],
    addHero: (hero) => {},
    deleteHero: (id) => {}
})

export const HeroContextProvider = (props) => {
    const [heroTeam, setHeroTeam] = useState([]);

    const addHeroTeam = (hero) => {
        setHeroTeam((prevState) => {
            return [...prevState, hero]
        })
    }

    const deleteHeroTeam = (id) => {
        setHeroTeam((prevState) => {
            return prevState.filter((hero) => hero.id !== id)
        })
    }

    return <HeroContext.Provider
            value={{
                heroTeam: heroTeam,
                addHero: addHeroTeam,
                deleteHero: deleteHeroTeam
            }}
        >
        {props.children}
    </HeroContext.Provider>
}

export default HeroContext;