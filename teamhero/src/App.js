import { Route, Switch } from 'react-router-dom'
import Header from './components/Layout/Header';
import HeroSearch from './pages/HeroSearch';
import HomePage from './pages/HomePage'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route exact path='/search'>
          <HeroSearch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
