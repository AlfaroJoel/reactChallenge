import { useContext } from 'react';
import { Route } from 'react-router-dom'

import HeroContext from './store/HeroContext'
import Header from './components/Layout/Header';
import HeroCard from './components/Card/HeroCard';
import HeroSearch from './pages/HeroSearch';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const ctx = useContext(HeroContext);

  return (
    <div className="App">
      <Header />
      <Route path='/home'>
        <section className='App__team'>
          {console.log(ctx.heroTeam)}
        </section>
      </Route>
      <Route path='/search'>
        <HeroSearch></HeroSearch>
      </Route>
    </div>
  );
}

export default App;
