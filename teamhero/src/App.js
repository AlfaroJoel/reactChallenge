import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom'

import HeroContext from './store/HeroContext'
import Header from './components/Layout/Header';
import HeroCard from './components/Card/HeroCard';
import HeroSearch from './pages/HeroSearch';
import Powerstats from './components/Layout/Powerstats';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const ctx = useContext(HeroContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/home' exact>
          <Container fluid className='my-3'>
            <Row>
              {ctx.heroTeam && ctx.heroTeam.length > 0 && ctx.heroTeam.map((hero) => {
                return <Col>
                  <HeroCard
                    key={hero.id}
                    hero={hero}
                    isCardDelete={true}
                  />
                </Col>
              })}
            </Row>
          <Powerstats/>
          </Container>
        </Route>
        <Route path='/search' exact>
          <HeroSearch></HeroSearch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
