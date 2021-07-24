import { useState } from "react";
import ButtonDefault from './ButtonDefault';

import HeroCard from "../Card/HeroCard";

const svgPrevious = <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.294688 8.80393L7.58259 0.832836C7.93407 0.448397 8.50392 0.448397 8.85537 0.832836L9.70539 1.76254C10.0563 2.14632 10.0569 2.76832 9.70689 3.15301L3.9311 9.50001L9.70689 15.847C10.0569 16.2317 10.0563 16.8537 9.70539 17.2374L8.85537 18.1671C8.50389 18.5516 7.93404 18.5516 7.58259 18.1671L0.294725 10.196C-0.0567617 9.81165 -0.0567617 9.18837 0.294688 8.80393Z" fill="black" />
</svg>

const svgNext = <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.70531 10.1961L2.41741 18.1672C2.06593 18.5516 1.49608 18.5516 1.14463 18.1672L0.294613 17.2375C-0.0562748 16.8537 -0.0569497 16.2317 0.293113 15.847L6.0689 9.49999L0.293113 3.15303C-0.0569497 2.76834 -0.0562748 2.14634 0.294613 1.76256L1.14463 0.832855C1.49611 0.448415 2.06596 0.448415 2.41741 0.832855L9.70527 8.80395C10.0568 9.18835 10.0568 9.81163 9.70531 10.1961Z" fill="black" />
</svg>

const Carousel = ({ foundHeroes, errorHandler }) => {
    const [numHero, setNumHero] = useState(0);

    const nextHeroHandler = () => {
        if (foundHeroes.length !== numHero + 1) { //si no es el ultimo
            setNumHero(numHero + 1)
        }
    }

    const previousHeroHandler = () => {
        if (numHero !== 0) {
            setNumHero(numHero - 1);
        }
    }

    return (
        <>
            {foundHeroes && (foundHeroes.length > 1
                ? (<>
                    <ButtonDefault variant='outline-secondary' onClick={previousHeroHandler} content={svgPrevious} />
                    <HeroCard hero={foundHeroes[numHero]} isCardDelete={false} errorHandler={errorHandler}/>
                    <ButtonDefault variant='outline-secondary' onClick={nextHeroHandler} content={svgNext} />
                </>)
                : <HeroCard key={foundHeroes[0].id} hero={foundHeroes[0]} isCardDelete={false} errorHandler={errorHandler}/>)
            }
        </>
    )
}

export default Carousel;