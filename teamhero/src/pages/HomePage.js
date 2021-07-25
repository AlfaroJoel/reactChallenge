import { useContext } from 'react';
import HeroContext from '../store/HeroContext'
import HeroCard from '../components/Card/HeroCard';
import Powerstats from '../components/Layout/Powerstats';
import Header from '../components/Layout/Header';

function HomePage() {

    const ctx = useContext(HeroContext);

    return (
        <>
            <Header />
            <div className='my-3 container-fluid'>
            <div className='row'>
              {ctx.heroTeam && ctx.heroTeam.length > 0 && ctx.heroTeam.map((hero) => {
                return <div className='col' key={hero.id}>
                  <HeroCard
                    hero={hero}
                    isCardDelete={true}
                  />
                </div>
              })}
            </div>
            <Powerstats />
          </div>
        </>
    )
}

export default HomePage
