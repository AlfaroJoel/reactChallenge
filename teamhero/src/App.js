import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Layout/Header';
import HeroCard from './components/Card/HeroCard';
import HeroSearch from './pages/HeroSearch'

function App() {
  const urlBase = 'https://www.superheroapi.com/api.php/';
  const token = 104060338637111;
  const endPoint = urlBase + token;

  const [listHeroes, setListHeroes] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(endPoint + '/545');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const { id, name, powerstats, appearance, work, image } = await response.json();

      setListHeroes((prevState) => [...prevState, { id, name, powerstats, appearance, work, image }]);

    } catch (err) {
      console.log(err);
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Route path='/home'>
        <section className='App__team'>
          {listHeroes.map((hero) => {
            return <HeroCard 
              key={hero.id} 
              name={hero.name} 
              powerstats={hero.powerstats} 
              image={hero.image} 
              isCardDelete={true}
            />
          })}
        </section>
      </Route>
      <Route path='/search'>
        <HeroSearch></HeroSearch>
      </Route>
    </div>
  );
}

export default App;
